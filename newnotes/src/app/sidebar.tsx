import { db } from '~/server/db';
import { posts_01 } from '~/server/db/schema'


export default function Sidebar () {
    return ( 
<aside id="default-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
     <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                <span className="ms-3">Saved Notes</span>
              </a>
              <a href="#" className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3"> </span>
              </a>
          </li>
        </ul>
      </div>
  </aside>
    )
}
  /*
export async function main() {
  const data = await db.query.posts_01.findMany({ 
    columns: {
      content: true,
      title: true,
    },
  })

  //this commented code below is to show you how to straight up map something as output on your page, unformatted
  //this is the concept that is used below along with the daisyUI cards to output all of your data in your schema / array
    return (<div>
        {data.map((data,index) => (
          <div key={index}>{data.title} - {data.content}</div>
        ))}
      </div>)*/


  //this is how to format it with daisyUI cards, you can change the classes to whatever you want, just remember to use tailwind classes
  //this is a grid layout, you can change the grid-cols-1 to whatever you want, just remember to use tailwind classes
  //the biggest change done here is basically you need to wrap all of the  tailwind card stuff with the map function
  // This forces the cards to be generated for each item in the arrayinstead of just one card for the whole array.
     /*
     return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data,index) => (
          <div key={index}>{data.title} - {data.content}</div>
        ))}
      </div>
      );
    }*/
