import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useHistory } from 'react-router-dom'; 
function FormForBook (props) {
  const history = useHistory(); 
  const {
    formik
  } = props;

return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
      <FormGroup className="position-relative">
        <Label for="exampleText">Title</Label>
        <Input 
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Title"
        />
        {formik.errors.title ? formik.errors.title : null }
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Author</Label>
        <Input 
          type="text"
          name="author"
          id="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          placeholder="Author"
        />
        {formik.errors.author ? formik.errors.author : null }
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Year of Publication</Label>
        <Input
          type="number"
          name="published_at"
          id="published_at"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.published_at}
          placeholder="Year of Publication"
        />
        {formik.errors.published_at ? formik.errors.published_at : null }
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">ISBN</Label>
        <Input 
          type="text"  
          id="isbn"
          name="isbn"
          placeholder="ISBN"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
          />
          {formik.errors.isbn ? formik.errors.isbn : null }
      </FormGroup>
      
      <Button color="success" type="submit" 
      className={!(formik.dirty && formik.isValid) ? "disabled-btn" : ""}
      disabled={!(formik.dirty && formik.isValid)}>Submit</Button>  
      <Button onClick={history.goBack}>Cancel</Button>    
    </Form>
    </div>
  );
}

export default FormForBook