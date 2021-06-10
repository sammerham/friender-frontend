import React, {useState} from 'react';


function ProfileForm({handleUpdate}){
    const initialFormData = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        zipcode: "",
        radius: 0
      }
    const [selectedFile, setSelectedFile] = useState("");
    const [formData, setFormData] = useState(initialFormData)

    async function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdate(selectedFile, formData ); //api function  //backend
    }
    
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((formData) => ({
        ...formData,
        [name]: value,
        }));
    }

    return(
        <form>
        <input
          id="file"
          name="file"
          type="file"
          onChange={(e) => {
            // console.log(e.target.files);
            setSelectedFile(e.target.files[0]);
          }}
        />
        </form>
    )
}
export default ProfileForm;





