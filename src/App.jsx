import "./App.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        age: "18",
        gender: "",
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmitForm = (data) => {
        console.log(data);
        alert(`${data.name}`);
    };
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label>Nom</label>
                <input type="text" {...register("name", { require: true })} />
                {errors.name && (
                    <span style={{ color: "red" }}>
                        Ce champ est obligatoire
                    </span>
                )}
            </div>
            <div>
                <label>Telephone</label>
                <input name="phone" type="text" />
            </div>
            <div>
                <label>Email</label>
                <input name="email" type="email" />
            </div>
            <div>
                <label>Age</label>
                <input name="age" type="number" />
            </div>
            <div>
                <label>Genre</label>
                <select>
                    <option value="female">Femme</option>
                    <option value="male">Homme</option>
                    <option value="other">Autre</option>
                </select>
            </div>
            <button type="submit">Enregistrer</button>
        </form>
    );
}
export default App;
