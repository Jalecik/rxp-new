import loaderStyle from './loader.module.scss';

const LoaderComponent = () => {
    return (
        <div className={loaderStyle.loader}>
            <span className={loaderStyle.inner}></span>
        </div>
    );
};

export default LoaderComponent;
