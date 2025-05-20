"use client";
import Sidebar from "./sidebar"
import { useState, useEffect } from 'react';
import uploadData from "./_components/route";
import { useRouter } from "next/navigation";
import { title } from "process";
import { db } from "~/server/db";
import { Notes } from "./notecards.tsx/page";



/*
type ReturnData = {
    message: string;
    error?: string;
    }; */

 function MyButton() {
    const [text, setText] = useState<string>(""); // To track the input text
    const [title, setTitle] = useState<string>("");
    const router = useRouter();

    

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await uploadData(text, title);
      console.log(result); // Handle the result as needed
      router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
      setText("");
      setTitle("");
        };
      
    return (
      <form onSubmit={handleSubmit}>
        <input
          className = "bg-blue-500 text-blue-100"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          className = "bg-yellow-100 text-yellow-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit" className = "bg-green-200">Upload</button>
      </form>
  
    );
  }


/*
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
    <div className="flex flex-col justify-center items-center box-border size-100 gap-7">
      <MyButton></MyButton>
    </div>
    </div>
    ) 
  }; */
  
  export default function Page() {
    return (
      <div className = "bg-pink-100 flex justify-center md:items-center">
        <div className = "justify flex columns-3xs ">
        <Sidebar></Sidebar>
        </div>
        <div>
          <Notes></Notes>
        </div>
        <div className = "">
        <MyButton></MyButton>
        </div>
      </div>
    )
  }

