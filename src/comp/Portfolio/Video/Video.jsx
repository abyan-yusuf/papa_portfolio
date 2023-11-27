import React from "react";

const Video = (props) => {
  return (
    <div className="w-full">
      <button onClick={() => document.getElementById("my_modal_3").showModal()} className="w-full">
        <img src={props.thumbnail} className='w-full h-auto rounded-lg' />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-opacity-0 w-[70%] max-w-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">
              ✕
            </button>
          </form>
                  <video src={props.video} width={'850'} controls/>
        </div>
      </dialog>
    </div>
  );
};

export default Video;
