/*"use client";
import Link from "next/link";
import { useState, ChangeEvent } from 'react';

type ReturnData = {
    message: string;
    error?: string;
  };
   function MyButton () {
    const [text, setText] = useState<string>(""); // To track the input text
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState<boolean>(false); // To handle loading state
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message
    const [error, setError] = useState<string | null>(null); // To show any error messages
    
  
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
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
          title: content,
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
        placeholder="Title"
        className="input input-bordered w-full mb-4"
        required
      />
      
      <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type here"
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

//href = "/about" leads to about directory => page.tsx page there
//export default myButton; if only one function there, if multiple cannot export
*/