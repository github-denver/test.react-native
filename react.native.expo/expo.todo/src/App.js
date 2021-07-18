import React, { useState } from 'react'
import { Dimensions, useWindowDimensions, StatusBar } from 'react-native'
import styled, { ThemeProvider } from 'styled-components/native'
import Input from './components/Input'
import Task from './components/Task'
import { theme } from './theme'
import { images } from './images'
import IconButton from './components/IconButton'
import AsyncStorage from '@react-native-community/async-storage'
import AppLoading from 'expo-app-loading'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.Text`
  margin: 0 20px;
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
`

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40 + 'px'};
`

const App = () => {
  const [newTask, setNewTask] = useState('')

  const [tasks, setTasks] = useState({})

  const _saveTasks = async (tasks) => {
    console.log('tasks: ', tasks)

    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks))

      setTasks(tasks)
    } catch (error) {
      console.error(error)
    }
  }

  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks')
    console.log('loadedTasks: ', loadedTasks)

    setTasks(JSON.parse(loadedTasks || '{}'))
  }

  const [isReady, setIsReady] = useState(false)

  /* const [tasks, setTasks] = useState({
    1: { id: 1, text: 'Hanbit', completed: false },
    2: { id: 2, text: 'React Native', completed: false },
    3: { id: 3, text: 'React Native Sample', completed: false },
    4: { id: 4, text: 'Edit TODO Item', completed: false },
  }) */

  const _addTask = () => {
    // alert(`Add: ${newTask}`)

    const ID = Date.now().toString()
    console.log('ID: ', ID)

    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    }

    setNewTask('')
    // setTasks({ ...tasks, ...newTaskObject })
    _saveTasks({ ...tasks, ...newTaskObject })
  }

  const _deleteTask = (id) => {
    console.log('id: ', id)

    const currentTasks = Object.assign({}, tasks)
    console.log('currentTasks: ', currentTasks)
    console.log('currentTasks[id]: ', currentTasks[id])

    delete currentTasks[id]

    // setTasks(currentTasks)
    _saveTasks(currentTasks)
  }

  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks)

    currentTasks[id]['completed'] = !currentTasks[id]['completed']

    // setTasks(currentTasks)
    _saveTasks(currentTasks)
  }

  const _updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks)

    console.log('item: ', item)

    currentTasks[item.id] = item

    // setTasks(currentTasks)
    _saveTasks(currentTasks)
  }

  const _handleTextChange = (text) => {
    console.log('text: ', text)

    setNewTask(text)
  }

  const _onBlur = () => {
    setNewTask('')
  }

  // const width = Dimensions.get('window').width
  const width = useWindowDimensions().width
  // console.log('width: ', width)

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.backgroundColor}
        />

        <Title>TODO List</Title>
        <Input
          placeholder="+Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />

        <List width={width}>
          {/* <Task text="Hanbit" />
          <Task text="React Native" />
          <Task text="React Native Sample" />
          <Task text="Edit TODO Item" /> */}

          {Object.values(tasks)
            .reverse()
            .map((item) => {
              console.log('item: ', item)

              return (
                // <Task text={item.text} key={item.id} />
                <Task
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                  key={item.id}
                />
              )
            })}
        </List>

        {/* <IconButton type={images.uncompleted} />
        <IconButton type={images.completed} />
        <IconButton type={images.delete} />
        <IconButton type={images.update} /> */}
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadTasks}
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  )
}

export default App
