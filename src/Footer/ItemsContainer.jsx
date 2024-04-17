import Item from "./Item";
import { COMPANY, LINKS,ADDRESS,LEGAL } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={LINKS} title="LINKS" />
      <Item Links={ADDRESS} title="ADDRESS" />
      <Item Links={LEGAL} title="Legal Business Name" />
    </div>
  );
};

export default ItemsContainer;
