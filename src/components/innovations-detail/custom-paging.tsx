const CustomPaging = ({ onClick, index, active }:any) => {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          width: '30px',
          height: '30px',
          border: '1px solid #ddd',
          borderRadius: '50%',
          background: active ? '#333' : '#fff',
          color: active ? '#fff' : '#333',
          cursor: 'pointer',
        }}
      >
        {index + 1}
      </button>
    );
  };
  
  export default CustomPaging;