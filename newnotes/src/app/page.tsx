"use client";
import Sidebar from "./sidebar"
import { useState, ChangeEvent } from 'react';

type ReturnData = {
    message: string;
    error?: string;
    };

    function MyButton() {
    const [text, setText] = useState<string>(""); // To track the input text
    const [title, setTitle] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false); // To handle loading state
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message
    const [error, setError] = useState<string | null>(null); // To show any error messages


    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const handleButtonClick = async () => {
      if (text.trim() === "") {
        alert("Please enter some text.");
        return;
      }

    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/upload-stuff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Use JSON for request body
        },
        body: JSON.stringify({
          title: title,
          content: text,
        }),
      });

      const data = await response.json() as ReturnData;
      
      if (response.ok) {
        setSuccessMessage(data.message); // Show success message
        setText(""); // Clear input
        setError(null); // Reset error state
      
      } else {
        setError(data.error ?? "An unknown error occurred");
      }
    } catch (error) {
      console.error("Error uploading text:", error);
      setError("An error occurred while uploading the text.");
    } finally {
      setLoading(false); // End loading state
    }

    };
return (
  <main>
    <div>
    {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}

    {successMessage && <div className="alert alert-success mb-4"><span>{successMessage}</span></div>}

    <input
      type="text"
      value={text}
      onChange={handleTextChange}
      placeholder="Text"
      className="input input-bordered w-full mb-4"
      required
    />
    
    <input
          type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            className="input input-bordered w-full mb-8"
            required
      />

<button 
      onClick={handleButtonClick}
      className="btn btn-primary w-full"
      disabled={loading} // Disable button during loading
    >
      {loading ? "Uploading..." : "Save"}
    </button>
    </div>
  </main>

)
}

export default function Page() {
    return (
      <main className="">
       <Sidebar></Sidebar>
    <div className="flex box-border size-100 gap-5 justify-center">
      <MyButton></MyButton>
    </div>
    </main>
    )
  };
