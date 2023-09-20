import pb from "./pb";

async function getUserByID() {
  const records = await pb.collection("Dream").getOne(id);
  // const record = await pb
  //   .collection("Dream")
  //   .getFirstListItem('description="เครียด"', {});
  // console.log(record);
}

getUserByID()

export default insetUserData;
