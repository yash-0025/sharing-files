const Form = () => {
  const [loading, setLoading] = useState(false)
  const [destination, setDestination] = useState()
  const [imageAsset, setImageAsset] = useState()
  const [wrongImageType, setWrongImageType] = useState(false)
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0]
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      setWrongImageType(false)
      setLoading(true)
      client.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          setImageAsset(document)
          setLoading(false)
        })
        .catch((error) => {
          console.log("Upload failed:", error.message)
        })
    } else {
      setLoading(false)
      setWrongImageType(true)
    }
  }
  return (
    <div className="form">
      <form>
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" />
        <label>
        <div >
            <p className="text-lg">Click to upload</p>
        </div>
        <input
          type="file"
          name="upload-image"
          onChange={uploadImage}
        />
      </label>
      </form>
    </div>
  )
}

export default Form
