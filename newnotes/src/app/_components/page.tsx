"use client";
import Link from "next/link";
import MyButton from "../mybutton";
import Sidebar from "../sidebar"
import { useState, ChangeEvent } from "react";

   export default function HomePage() {
      return(
    <main className="">
       <Sidebar></Sidebar>
    <div className="flex box-border size-100 gap-5 justify-center">
      <input id="text" placeholder="Title" className="input input-bordered max-w-xs justify-center hover:bg-purple-200"/>
      <MyButton></MyButton>
    </div>
    </main>
      )
 };