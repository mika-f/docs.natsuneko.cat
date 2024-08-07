import { Hyperlink } from "@natsuneko-laboratory/ui/navigations/hyperlink";

type Props = {
  repo: string;
};

type Release = {
  html_url: string;
  id: string;
  name: string;
  tag_name: string;
  prerelease: boolean;
  published_at: string;
};

type Response = Release[];

const getReleases = async (repo: string): Promise<Response> => {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/releases?per_page=5`,
    { next: { revalidate: 60 * 60 * 1 } }
  );
  if (response.ok) {
    return response.json() as Promise<Response>;
  }

  return [];
};

const Changelog = async ({ repo }: Props) => {
  const re = await getReleases(repo);

  return (
    <div className="flex flex-col">
      {re.length === 0 ? (
        <p className="px-2 py-4">
          No releases yet or failed to fetch. Please check back later.
        </p>
      ) : (
        re.map((w) => {
          return (
            <Hyperlink
              key={w.id}
              href={w.html_url}
              className="block border-neutral-300 px-2 py-4 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 [&:not(:last-child)]:border-b"
            >
              <p className="text-sky-300">
                {w.name || w.tag_name}
                {w.prerelease && (
                  <span className="ml-2 text-sm text-orange-700 dark:text-orange-300">
                    Prerelease
                  </span>
                )}
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                {new Date(w.published_at).toLocaleDateString("ja-JP")}
              </p>
            </Hyperlink>
          );
        })
      )}
    </div>
  );
};

export { Changelog };
