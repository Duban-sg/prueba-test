

export const imageToBase64=(image:File,onload:(result:any)=>void)=>{

  let reander = new FileReader()
  let _result;
  reander.readAsDataURL(image);
  reander.onload = ()=>{
    onload(reander.result)
  };

}
