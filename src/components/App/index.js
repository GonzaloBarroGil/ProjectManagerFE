import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    AxisColumn,
    Button,
    Column,
    ColumnNineTenths,
    ColumnOneTenth,
    Container,
    Input,
    WingColumn
} from './styled';
import Editor from './Editor';
import logo from '../../logo.png';
import {getPeople, getProject, getProjects} from '../../store/project/selectors';
import {getProjectsRequest, getProjectRequest, saveProjectRequest} from '../../store/project/actions';

const App = () => {
    const dispatch = useDispatch();
    const [terms, setTerms] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [newProject, setNewProject] = useState();
    const projects = useSelector(getProjects);
    const people = useSelector(getPeople)
    const project = useSelector(getProject);
    useEffect(() => {
        setNewProject(project);
        setIsEditing(false);
    }, [project]);
    useEffect(() => {
        setNewProject();
        setIsEditing(false);
    }, [projects]);
    
    const handleChangeTerm = ({target: {value}}) => setTerms(value);

    const handleChangeProject = ({target: {name, value}}) => {
        const patch = {...newProject};
        const [parent, child] = name.includes('.') ? name.split('.') : [name, null];
        patch[parent] = child ? {...patch[parent], [child]: value} : value;
        setNewProject({...newProject, ...patch});
    };
    
    const handleSearch = () => dispatch(getProjectsRequest(terms));
    
    const handleFind = id => dispatch(getProjectRequest(id));
    
    const handleEdit = () => {
        setIsEditing(true);
        setNewProject({...project});
    };
    
    const handleNew = () => {
        setIsEditing(true);
        setNewProject({
            name: '',
            data: {
                assignee: null,
                startDate: '',
                dueDate: ''
            }
        });
    };
    
    const handleClose = changedProject => {
        setIsEditing(false);
        setNewProject(null);
        if (changedProject) {
            dispatch(saveProjectRequest(changedProject));
        }
    };

    return (
        <Container>
            <WingColumn>
                <Column>
                    <Column>
                        <label>Proyectos</label>
                    </Column>
                    <Column>
                        <Input name="terms" value={terms} onChange={handleChangeTerm}/>
                        <Button onClick={handleSearch}>Buscar</Button>
                    </Column>
                </Column>
                {projects.map(projectItem => (
                    <Column
                        key={projectItem.id}
                        onClick={() => handleFind(projectItem.id)}
                    >
                        <ColumnOneTenth>{projectItem.id}</ColumnOneTenth>
                        <ColumnNineTenths>{projectItem.name}</ColumnNineTenths>
                    </Column>
                ))}
                <Column>
                    <Button onClick={handleNew}>Nuevo</Button>
                </Column>
            </WingColumn>
            <AxisColumn>
                <Column>
                    <h1>Gestión de Proyectos</h1>
                </Column>
                <Column>
                    <img src={logo} alt="cra"/>
                </Column>
                <Column>
                    <label>¡Bienvenido!</label>
                </Column>
            </AxisColumn>
            <WingColumn>
                <Column><p>Datos del proyecto</p></Column>
                {newProject ? (
                    <Editor
                        project={newProject}
                        people={people}
                        isEditing={isEditing}
                        onEdition={handleEdit}
                        onClose={handleClose}
                        onChange={handleChangeProject}
                    />
                ) : (
                    <Column>
                        no hay ningún proyecto seleccionado
                    </Column>
                )}
            </WingColumn>
        </Container>
    );
};

export default App;
