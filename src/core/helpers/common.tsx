
export const dataSerialize = (data: any) => {
    return JSON.parse(JSON.stringify(data))
}


// commonServerSideProps.js

export const commonServerSideProps = async (apiCallFunction:any, ...args:any) => {
    var data = null;
    try {
        if(args){
             data = await apiCallFunction(...args);
        } else {
             data = await apiCallFunction();
        }
        return {
            props: {
                data: dataSerialize(data)
            }
        };
    } catch (error:any) {
        console.log('--------------------------------------------------',error.response.data)
        // toast.error(error.response.data?.message)
        return {
            props: {
                error: error.response.data?.message
            }
        };
    }
};


