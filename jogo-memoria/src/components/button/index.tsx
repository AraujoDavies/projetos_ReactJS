import { MouseEventHandler } from "react";
import * as D from "./style";

type Props = {
    label: string,
    icon?: any,
    onClick: MouseEventHandler<HTMLDivElement>
}

export const Button = ( {label, icon, onClick }: Props)=>{

    return(
        <D.Container onClick={onClick}>
            {icon &&
            <D.IconArea>
                <D.Icon src={icon} ></D.Icon>
            </D.IconArea>
            }
            <D.Label> { label } </D.Label>
        </D.Container>
    );
}