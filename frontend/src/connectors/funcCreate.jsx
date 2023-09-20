import pb from "./pb";

async function insetUserData(name, dream, desc) {
  const data = {
    name: name,
    dream: dream,
    description: desc,
  };

  const record = await pb.collection("Dream").create(data);
  return record;
}
export default insetUserData;

