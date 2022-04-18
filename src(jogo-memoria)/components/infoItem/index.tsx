import * as D from "./style";

type Props = {
    label: string,
    value: string
}

export const InfoItem = ( {label, value}: Props ) => {
    return (
        <D.Container>
            <D.Label>
                {label}
            </D.Label>
            <D.Value>
                {value}
            </D.Value>
        </D.Container>
    );
}