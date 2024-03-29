{
  //
  const createPromise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "somthing";

      if (data) {
        resolve(data);
      } else {
        reject("faild to load data");
      }
    });

}
  
const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };
  showData()

  //
}
