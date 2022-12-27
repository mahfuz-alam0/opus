import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Admin = () => {

    const { register, handleSubmit } = useForm();
    const [info, setInfo] = React.useState(null);
    const [edit, setEdit] = React.useState(false);


    const notify = () => toast.success('Heading updated successfully');

    const img_host_key = process.env.REACT_APP_imgbb_key;

    React.useEffect(() => {
        fetch('https://opus-server-hasibul240.vercel.app/heading')
            .then(res => res.json())
            .then(data => setInfo(data[0]))
    }, []);

    const id = info?._id;

    const updateHeading = (event) => {
        event.preventDefault();
        const form = event.target
        const heading = form.heading.value

        fetch(`https://opus-server-hasibul240.vercel.app/heading/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ heading })
        }).then(res => res.json())
            .then(data => {
                notify()
                form.reset()
                fetch('https://opus-server-hasibul240.vercel.app/heading')
                    .then(res => res.json())
                    .then(data => setInfo(data[0]))
                // navigate('/')
            })

    }
    const updateImage = (data) => {

        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${img_host_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    fetch(`https://opus-server-hasibul240.vercel.app/heading/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ img: imgdata.data.url })
                    }).then(res => res.json())
                        .then(data => {
                            notify()
                            fetch('https://opus-server-hasibul240.vercel.app/heading')
                                .then(res => res.json())
                                .then(data => setInfo(data[0]))
                            // navigate('/')

                        })
                }

            })
    }


    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
    }

    return (
        <div className='max-w-[1120px] mx-auto'>
            <div className="max-w-[500px] mx-auto">
                <form onSubmit={updateHeading} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className='block text-gray-700 text-sm font-bold' htmlFor="">Enter new heading</label>
                    <input name='heading' className='my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text' type="text" placeholder={info?.heading} />
                    <input className='button' type="submit" value='update' />
                </form>
                <form onSubmit={handleSubmit(updateImage)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col'>
                            <p className=''>Current image</p>
                            <div className=' gap-3'>
                                {
                                    !edit && <button onClick={handleEdit} className='button'>Update</button>
                                }
                            </div>
                            <div className={`${!edit && 'hidden'}`}>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="">Chose a new image</label>
                                {/* <input name='image' className={`my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text `} type="file" placeholder='have' /> */}
                                <input {...register("image", { required: "Image must be uploaded" })} type="file" className="my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                        </div>
                        <div className='max-w-[150px]'>
                            <img src={info?.img} alt="" />
                        </div>
                    </div>
                    {
                        edit && <input className='button' type="submit" value='update' />
                    }

                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Opus. All rights reserved.
                </p>
            </div>
        </div>
    );
};


export default Admin;