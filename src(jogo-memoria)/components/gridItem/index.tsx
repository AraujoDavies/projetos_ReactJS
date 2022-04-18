import * as D from "./style"
import { GridItemType } from "../../types/gridItemType";
import b7 from "../../svgs/b7.svg"
import { items } from "../../data/items";

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ( {item, onClick}: Props) => { /* passei o item e o click por props */
    
    return(
        <D.Container 
        onClick={onClick}
        cardBackground={!item.permanentShow && !item.show /*Mandei a Prop */}
        > 
            {!item.permanentShow && !item.show &&
                <D.Icon src={b7} alt="" opacity={0.1}></D.Icon>
            }
            {item.permanentShow && !item.show && item.item != null &&
                <D.Icon src={items[item.item].icon} alt="" ></D.Icon>
            }
            {item.show && !item.permanentShow && item.item !=null &&
                <D.Icon src={items[item.item].icon}></D.Icon>
            }
        </D.Container>
    );
}