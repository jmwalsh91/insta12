import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Text, Button } from '@nextui-org/react';

function TasksRunning({ tasksActive }) {
  return (
    <>
      {tasksActive && (
        <>
          <Grid sm={3} xs={12}></Grid>
          <Grid sm={6} xs={12}>
            <Card
              variant="flat"
              css={{
                backdropFilter: 'saturate(200%) blur(15px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Task Currently Running</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h3>Activate: @Username</Text>
              </Card.Body>
              <Card.Footer>
                <div className="task-buttons">
                  <Link to="/task">
                    <Button rounded>Progress</Button>
                  </Link>
                  <Button rounded flat color="error">
                    Abort
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid sm={3} xs={12}></Grid>
        </>
      )}
    </>
  );
}

export default TasksRunning;