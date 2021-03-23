import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Column,
    ColumnHalf,
    Input
} from '../styled';
import {getPersonName, projectIsNotValid} from '../../../util/projects';

const Editor = ({
    project, people, isEditing, onEdition, onClose, onChange
}) => {
    const handleSave = () => onClose(project);

    const handleCancel = () => onClose();

    return (
        <>
            {isEditing ? (
                <>
                    <Column>
                        <p>{`Proyecto ${project.id || 'nuevo'}`}</p>
                    </Column>
                    <Column>
                        <Column>
                            <p>Nombre:</p>
                        </Column>
                        <Column>
                            <Input name="name" id="name" value={project.name} onChange={onChange}/>
                        </Column>
                        <Column>
                            <p>Inicio:</p>
                        </Column>
                        <Column>
                            <Input name="data.startDate" id="data.startDate" value={project.data?.startDate} onChange={onChange}/>
                        </Column>
                        <Column>
                            <p>Límite:</p>
                        </Column>
                        <Column>
                            <Input name="data.dueDate" id="data.dueDate" value={project.data?.dueDate} onChange={onChange}/>
                        </Column>
                        <Column>
                            <p>Responsable:</p>
                        </Column>
                        <Column>
                            <Input name="data.assignee" id="data.assignee" value={project.data?.assignee} onChange={onChange}/>
                        </Column>
                    </Column>
                    <Column>
                        <ColumnHalf>
                            <Button onClick={handleSave} disabled={projectIsNotValid(project)}>Guardar</Button>
                        </ColumnHalf>
                        <ColumnHalf>
                            <Button onClick={handleCancel}>Cancelar</Button>
                        </ColumnHalf>
                    </Column>
                </>
            ) : (
                <>
                    <Column>
                        <ColumnHalf>
                            <p>{`Proyecto ${project.id}`}</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <Button onClick={onEdition}>Editar</Button>
                        </ColumnHalf>
                    </Column>
                    <Column>
                        <ColumnHalf>
                            <p>Nombre:</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>{project.name}</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>Inicio:</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>{project.data?.startDate}</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>Límite:</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>{project.data?.dueDate}</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>Responsable:</p>
                        </ColumnHalf>
                        <ColumnHalf>
                            <p>{getPersonName(people, project.data?.assignee)}</p>
                        </ColumnHalf>
                    </Column>
                </>
            )}
        </>
    );
};

Editor.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        data: PropTypes.shape({
            startDate: PropTypes.string.isRequired,
            dueDate: PropTypes.string.isRequired,
            assignee: PropTypes.number.isRequired
        }).isRequired
    }),
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })),
    isEditing: PropTypes.bool.isRequired,
    onEdition: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Editor;