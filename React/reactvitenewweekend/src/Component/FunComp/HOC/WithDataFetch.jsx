import { useEffect, useState } from "react";

const WithDataFetch = (WrapComponent, apiUrl) => {


  return (props) => {
    const [data, setdata] = useState([]);

    const fetchapi = async () => {
      let res = await fetch(apiUrl);
      let da = await res.json();

      setdata(da);
    };


    useEffect(() => {
      fetchapi();
    },[apiUrl]);



    return (
      <div>
        <WrapComponent {...props} data={data} />
      </div>
    );


  };



};

export default WithDataFetch;
