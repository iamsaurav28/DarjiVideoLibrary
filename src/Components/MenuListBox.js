import { MenuListItem } from "./MenuListItem";

export const MenuListBox = ({ video, listBoxStyle, items, className }) => {
  return (
    <div style={listBoxStyle} className={className}>
      {items.map((item, index) => (
        <MenuListItem key={index} video={video} item={item} />
      ))}
    </div>
  );
};
