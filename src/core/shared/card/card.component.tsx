import css from './card.module.scss';

const Card = (props: any) => {
    const {classes = '', children, padding} = props
    return (
        <div
            className={`${padding ? 'p-' + padding : 'p-0'} ${classes} ${css.card}`}>
            {children}
        </div>
    );
}


export default Card