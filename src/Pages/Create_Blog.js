import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    if (image) {
      console.log('Image:', image.name);
    }
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Paper
      sx={{
        padding: 4, // Increase padding for more space inside the Paper
        maxWidth: '1000px', // Increase maxWidth to expand the Paper width
        margin: 'auto',
        marginTop: 6, // Slightly more top margin
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative', // Make the Paper a positioning context
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Create Blog Post
      </Typography>

      {/* File Input positioned in the top right corner */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the default file input
        />
        <label htmlFor="image">
          <Button variant="outlined" component="span">
            Add Image
          </Button>
        </label>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: '48px' }}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <div style={{ marginBottom: '16px' }}>
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Write your blog content here..."
            style={{ height: '300px' }}
          />
        </div>
        {/* Move the button downwards with additional margin-top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '16px',
            marginTop: '60px', // Increased marginTop to move the button further down
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default CreateBlog;

