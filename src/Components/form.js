import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Switch from '@mui/material/Switch';
import './style.css'

function FormValidate() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        AgencyName: yup.string().required(),
        PhoneNumber: yup.string().required(),
        address: yup.string().required(),
        PinCode: yup.string().required(),
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(e) => e.preventDefault()}
            initialValues={{
                AgencyName: '',
                PhoneNumber: '',
                address: '',
                PinCode: '',
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} className='entireForm'>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="5"
                            controlId="validationFormik101"
                            className="position-relative boxL"
                        >
                            <Form.Label>Agency Name</Form.Label>
                            <Form.Control
                                style={{ textAlign: 'center' }}
                                type="text"
                                name="AgencyName"
                                // placeholder='Agency Name'
                                value={values.AgencyName}
                                onChange={handleChange}
                                isValid={touched.AgencyName && !errors.AgencyName}
                                isInvalid={!!errors.AgencyName}
                            />

                            <Form.Control.Feedback tooltip>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.AgencyName}
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group as={Col} md="5" controlId="validationFormikUsername2">
                            <Form.Label>Phone Number</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                                <Form.Control
                                    type="Number"
                                    // placeholder="PhoneNumber"
                                    aria-describedby="inputGroupPrepend"
                                    name="PhoneNumber"
                                    value={values.PhoneNumber}
                                    onChange={handleChange}
                                    isInvalid={!!errors.PhoneNumber}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.PhoneNumber}
                                </Form.Control.Feedback>

                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="5"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>Agency Type</Form.Label>
                            <Form.Select aria-label="Default select example" style={{textAlign: 'center'}}>
                                <option></option>
                                <option value="DispatchLicense">Dispatch License</option>
                                <option value="NoLicense">No License</option>
                                <option value="RecruitingLicense">Recruiting License</option>
                            </Form.Select>

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.AgencyType}
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="5"
                            controlId="validationFormik104"
                            className="position-relative"
                        >
                            <Form.Label className='switch'><Switch defaultChecked />Is White Label?</Form.Label>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik105"
                            className="position-relative"
                        >
                            <Form.Label>Physical Address</Form.Label>
                            <Form.Control
                                style={{ textAlign: 'center' }}
                                type="text"
                                // placeholder="Address" 
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                                isValid={touched.address && !errors.address}
                                isInvalid={!!errors.address}
                            />

                            <Form.Control.Feedback tooltip>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.address}
                            </Form.Control.Feedback>

                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>Country</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Mexico</option>
                                <option value="DispatchLicense">Dispatch License</option>
                                <option value="NoLicense">No License</option>
                                <option value="RecruitingLicense">Recruiting License</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>State/Province</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Mexico</option>
                                <option value="DispatchLicense">Dispatch License</option>
                                <option value="NoLicense">No License</option>
                                <option value="RecruitingLicense">Recruiting License</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>City</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Mexico</option>
                                <option value="DispatchLicense">Dispatch License</option>
                                <option value="NoLicense">No License</option>
                                <option value="RecruitingLicense">Recruiting License</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                style={{ textAlign: 'center' }}
                                type="number"
                                name="PinCode"
                                placeholder='PinCode'
                                value={values.PinCode}
                                onChange={handleChange}
                                isValid={touched.PinCode && !errors.PinCode}
                                isInvalid={!!errors.PinCode}

                            />

                            <Form.Control.Feedback tooltip>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.PinCode}
                            </Form.Control.Feedback>

                        </Form.Group>
                    </Row>

                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default FormValidate;