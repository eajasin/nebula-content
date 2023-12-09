import { useState } from "react"

const Author = ({ author, fetchAuthors }) => {

    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(author.name)
    console.log(author.name, "name")
    const [dob, setDob] = useState(author.dob)
    const [nationality, setNationality] = useState(author.nationality)

    const handleDelete = async () => {
        await fetch(`https://d11vxar4wz38b6.cloudfront.net/authors/${author.id}`, { method: "DELETE" })
            .then((res, err) => {
                console.log(res, err)
            })
        fetchAuthors()
    }

    const handleEdit = async () => {

        setEditing(!editing)
        setName(author.name)
        setDob(author.dob)
        setNationality(author.nationality)
    }

    const handleUpdate = async () => {
        const updatedAuthor = {
            name: name,
            dob: dob,
            nationality: nationality
        }
        await fetch(`https://d11vxar4wz38b6.cloudfront.net/authors${author.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedAuthor),
        })
            .then((res) => res.json())
            .then((res) => fetchAuthors())
        setEditing(!editing)
    }

    return (
        <div className="book">
            {!editing ? (
                <>
                    <h2>Title: {author.name}</h2>
                    <h4>Author Id: {author.dob}</h4>
                    <h4>Publication Year: {author.nationality}</h4>
                    <button onClick={handleDelete}>Delete Author</button>
                </>
            ) : (
                <>

                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                    <input
                        onChange={(e) => {
                            setDob(e.target.value);
                        }}
                        value={dob}
                    />
                    <input
                        onChange={(e) => {
                            setNationality(e.target.value);
                        }}
                        value={nationality}
                    />
                    <button onClick={handleUpdate}>Update</button>
                </>

            )}

            <button onClick={handleEdit}>Edit Author</button>

        </div>
    )
}

export default Author