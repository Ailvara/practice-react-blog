import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.title}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    //...
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          title="Title"
          name="title"
          component={this.renderField} //no parenthesis!! just reference, we do not call the functon
        />
        <Field
          title="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          title="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title="Enter a title!";
  }
  if(!values.categories) {
    errors.title="Enter a category!";
  }
  if(!values.content) {
    errors.title="Enter a content!";
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
