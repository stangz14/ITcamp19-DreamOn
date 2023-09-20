import pb from "./pb";

async function getsingleDream(id) {
  const records = await pb.collection("Dream").getOne(id, {
    expand: 'olddream'
  });
  console.log()
  return records.expand.olddream;


}

// console.log(getAllDream().then((resp) => {
//     console.log(resp);
// }))
export default getsingleDream;
