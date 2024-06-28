export function imagePath(id: string) {
  if (id == "" || id == undefined) {
    return "";
  }
  return `http://localhost:8080/api/files/${id}`;
}
