import { OverlayMenu } from "./OverlayMenu";
import { SideNav } from "./SideNav";
import { SideBar } from "./contexts/ArticleContext";

type Props = {
  title?: string;
  items: SideBar;
};

const OverlayNav: React.FC<Props> = ({ title, items }) => {
  return (
    <OverlayMenu title="Menu">
      <SideNav title={title} items={items} />
    </OverlayMenu>
  );
};

export { OverlayNav };
