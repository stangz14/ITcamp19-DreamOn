import pb from "./pb";

async function getAllDream() {
    const records = await pb.collection('Dream').getFullList({
        sort: '-created',
    });
  console.log()
  return records;


}

// console.log(getAllDream().then((resp) => {
//     console.log(resp);
// }))
export default getAllDream;
