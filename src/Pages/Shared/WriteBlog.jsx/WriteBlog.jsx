import React from 'react';

const WriteBlog = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Share Your Opinion</h1>
            <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-200 ng-untouched ng-pristine ng-valid text-black">
                <fieldset className="w-full text-center space-y-1 dark:text-gray-900 mt-4 mb-4">
                    <label htmlFor="files" className="block text-sm font-medium ">Attachments Your Image or other Document</label>
                    <div className="mx-auto">
                        <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-400 dark:bg-white" />
                    </div>
                    <textarea className="textarea w-full" placeholder="Tell your story ..."></textarea>
                </fieldset>
                <div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-100">Publish</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WriteBlog;