import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.title}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
