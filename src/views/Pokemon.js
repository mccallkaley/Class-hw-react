import React, { Component } from 'react'
import * as Yup from 'yup';
import {Formik, Field, Form} from 'formik';
import Table from 'react-bootstrap/Table'

const formSchema = Yup.object().shape({
    "name": Yup.string().required("Required").lowercase,

})

const initialValues = {
    name: ''
}

export default class Pokemon extends Component {
constructor() {
    super();
    this.state={
      name:''
    };
  }

handleSubmit=({name})=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                name: data.name,
              
            }, ()=>console.log(this.state.name))
        })
        
}    




render() {
    return (
        <div>
            <h1>Search for Pokemon</h1>
            <Formik initialValues={initialValues}
                    validationSchema={formSchema}
                    onSubmit={
                        (values, {resetForm})=>{
                            this.handleSubmit(values);
                            resetForm(initialValues);
                        }
                    }
                    >
                    {
                        ({errors, touched})=>(
                            <Form>
                                <label htmlFor="season" className="form-label">Name</label>
                                <Field name="season" className="form-control" />
                                {errors.name && touched.name? (<div style={{color:'red'}}>{errors.name}</div>):null}

                                <button type="submit" className="btn btn-primary">Search</button>

                            </Form>
                        )
                    }

            </Formik>

                {/* Pokemon */}
                {/* check for this.state.name and if it exists check the length if not stop */}
                {this.state.name?.length > 0 ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Weight</th>
                        </tr>
                    </thead>
                    
                    <tbody>  
                        {this.name.map(
                            name => (
                            <tr key={data.name}>
                                <td className="bold">{data.name}</td>
                                <td className="bold">{data.types[0].type.name}</td>
                                <td>{data.weight}</td>
                            </tr>
                            )
                        )
                        }
                        
                    
                    </tbody>
                </Table>
                :''}

            </div>
        )
    }
}