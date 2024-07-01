export default function getListStudentIds(item) {
  if (!Array.isArray(item)) return [];
  return item.map((student) => student.id);
}
