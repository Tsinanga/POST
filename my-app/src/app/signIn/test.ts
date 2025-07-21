"use server";

export const handleRegister = async (data:{name:string,email:string,password:string}) => {
    console.log("the data is",data);
    try {
      const res = await fetch('http://41.80.34.214:9098/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // if (!res.ok) {
      //   const data = await res.json();
      //   throw new Error(data.message || 'Signup failed');
      // }

      const datas = await res.json();
      console.log("the API response is",datas);
      // return datas;
    } catch (err:any) {
        console.log("the error is",err);
      throw new Error(err.message || 'Error occurred');
    }

};
 