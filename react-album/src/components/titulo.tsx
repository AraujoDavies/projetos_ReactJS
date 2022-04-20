// padrão de titulos
type Prop = {title: string};

export const H2daSection = ({title}: Prop) => {
    return(
        <h2 className='text-2xl m-1'>{title}</h2>
    );
}