export type GridItemType = {
    item: number | null; //Começa como nulo e dps usamos um numero para referencia-lo no arquivo data/items
    show: boolean; // se está mostrando na jogada
    permanentShow: boolean; // se o item foi achado permanentemente
}