import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Create = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the post data to your backend
    console.log('Submitting post:', { image, caption });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <Card>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input type="file" onChange={handleImageChange} accept="image/*" />
              </div>
              {image && (
                <div className="mb-4">
                  <img src={image} alt="Preview" className="max-w-full h-auto" />
                </div>
              )}
              <div className="mb-4">
                <Textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <Button type="submit">Post</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Create;