import { format } from "date-fns";
import { Paragraph } from "@/components/markdown/Paragraph";

type Props = {
  repository: string;
};

type Release = {
  html_url: string;
  id: string;
  name: string;
  tag_name: string;
  prerelease: boolean;
  published_at: string;
};

type JsonResponse = Release[];

const fetchLatestReleases = async (
  repository: string
): Promise<JsonResponse> => {
  const res = await fetch(
    `https://api.github.com/repos/${repository}/releases?per_page=5`,
    { next: { revalidate: 60 * 60 * 1 } }
  );

  if (res.ok) {
    const json = await res.json();
    return json as JsonResponse;
  }

  return [];
};

export const Changelog = async ({ repository }: Props) => {
  const json = await fetchLatestReleases(repository);

  if (json.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="px-2 py-4">
          <Paragraph>No releases found.</Paragraph>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {json.map((release) => {
        return (
          <a
            key={release.id}
            href={release.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-border px-2 py-4 hover:bg-muted [:last-child]:border-b-0"
          >
            <div className="flex items-baseline">
              {release.name}
              {release.prerelease && (
                <div className="ml-2 text-sm text-warning">プレリリース</div>
              )}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {format(new Date(release.published_at), "yyyy/MM/dd")}
            </div>
          </a>
        );
      })}
    </div>
  );
};
