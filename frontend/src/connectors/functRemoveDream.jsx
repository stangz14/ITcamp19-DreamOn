import pb from "./pb";

async function RemoveDream(id) {
   return await pb.collection('OldDream').delete(id);
}


export default RemoveDream;
