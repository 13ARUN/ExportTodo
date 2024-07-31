const fs = require('fs');
const path = require('path');
const { fireEvent } = require("@testing-library/dom");



describe('HTML', () => {



beforeEach(() => {
    
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
    const cssContent = fs.readFileSync(path.resolve(__dirname, './css/style.css'), 'utf8');
    
    document.body.innerHTML = html;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);

    file = document.querySelector('*');
    body = document.querySelector('body');
    mainDiv = document.querySelector('.main');
    noti = document.querySelector('p');
    toastDiv = document.querySelector('#toast-container');
    todoDiv = document.querySelector('.todo')
    script = document.querySelector('script');
    header = document.querySelector('header');
    h1Element = header.querySelector('h1');
    taskFieldDiv = document.querySelector('.taskfield');
    taskInputDiv = document.querySelector('.taskinput');
    form = taskInputDiv.querySelector('form');
    inputField = form.querySelector('#input');
    addBtn= form.querySelector('#add');
    addBtnImg = addBtn.querySelector('img');
    


});
     
describe('HTML-File Section', () => {

    it('should have font family as "Arial,sans-serif"', () => {
    
        const style = window.getComputedStyle(file);

        expect(file).toBeTruthy();
        expect(style.fontFamily).toBe('Arial,sans-serif'); 
    });
});

describe('HTML-Body Section', () => {

    it('should have a body tag', () => {
        expect(body).toBeTruthy();
        expect(body.contains(mainDiv)).toBe(true);
        expect(body.contains(noti)).toBe(true);
        expect(body.contains(toastDiv)).toBe(true);
        expect(body.contains(script)).toBe(true);

        const styles = window.getComputedStyle(mainDiv);

        expect(mainDiv).toBeTruthy();
        expect(styles.backgroundImage).toBe("url(../img/back2.jpg)");
    });

});    


describe('HTML-ToDo Section', () => {

    it('should have a div with class name "todo"', () => {
        
        const stylesToDo = window.getComputedStyle(todoDiv);

        expect(todoDiv).toBeTruthy();
        expect(header).toBeTruthy();
        expect(header.contains(h1Element)).toBe(true);
        expect(stylesToDo.backgroundColor).toBe('rgba(212, 174, 236, 0.801)');
        const styles = window.getComputedStyle(header);

        expect(h1Element.textContent).toBe('To-Do Planner!');
        expect(styles.color).toBe('rgb(63, 20, 119)');
          
    });
});


describe('HTML-Task Input Section', () => {

    
    it('should have a div with class name "taskfield"', () => {
        
        expect(taskFieldDiv).toBeTruthy();
        expect(taskInputDiv).toBeTruthy();
        expect(taskInputDiv.contains(form)).toBe(true);
        expect(form.contains(inputField) && form.contains(addBtn)).toBe(true);
        expect(inputField.getAttribute('type')).toBe('text');
        expect(inputField.getAttribute('id')).toBe('input');
        expect(inputField.getAttribute('placeholder')).toBe('Enter your tasks...');   
        expect(inputField.getAttribute('autocomplete')).toBe('off');  
        expect(inputField.getAttribute('maxlength')).toBe('150'); 
        expect(inputField.textContent).toBe('');
        expect(addBtn.getAttribute('type')).toBe('submit');
        expect(addBtn.getAttribute('id')).toBe('add');
        expect(addBtn.getAttribute('title')).toBe('Add');
        expect(addBtn.contains(addBtnImg)).toBe(true);
        expect(addBtnImg.getAttribute('src')).toBe('img/taskadd.png');
        expect(addBtnImg.getAttribute('alt')).toBe('add icon'); 

    });

});

describe('HTML-Task Filter Section', () => {

    it('should have a div with class name "tasktext"', () => {
        const taskTextDiv = document.querySelector('.tasktext');
        expect(taskTextDiv).toBeTruthy();
    });

    it('should have a div with class name "taskfilterclr"', () => {
        const taskFilterClr = document.querySelector('.taskfilterclr');
        expect(taskFilterClr).toBeTruthy();
    });

    it('should have input type as radio buttons with name "taskFilter" ', () => {
        const taskFilterInputs = document.querySelectorAll('.taskfilterclr input')

        taskFilterInputs.forEach((input) => {
    
            expect(input.getAttribute('type')).toBe('radio');
            expect(input.getAttribute('name')).toBe('taskFilter');
        });
    });

    //? All Button
    it('should have all button and label inside taskfilterclr', () => {
        const taskFilterClr = document.querySelector('.taskfilterclr');
        const allRadioBtn = taskFilterClr.querySelector('#all');
        const allRadioLabel= taskFilterClr.querySelector('#labelall');

        expect(allRadioBtn).toBeTruthy();
        expect(allRadioLabel).toBeTruthy();
        expect(taskFilterClr.contains(allRadioBtn) && taskFilterClr.contains(allRadioLabel)).toBe(true);
    });

    it('should have `all` input button with the attributes "value:all" and onchange parameter as "all"', () =>{
        const allRadioBtn = document.querySelector('#all'); 

        expect(allRadioBtn.getAttribute('value')).toBe('all');
    });

    it('should have `all` label text content as "All" and attributes as "for:all, title:All" ', () => {
        const allRadioLabel= document.querySelector('#labelall');
        
        expect(allRadioLabel.textContent).toBe('All');
        expect(allRadioLabel.getAttribute('for')).toBe('all');
        expect(allRadioLabel.getAttribute('title')).toBe('All');
    });

    //? In Progress Button
    it('should have In Progress button and label inside taskfilterclr', () => {
        const taskFilterClr = document.querySelector('.taskfilterclr');
        const inprogressRadioBtn = taskFilterClr.querySelector('#inprogress');
        const inprogressRadioLabel= taskFilterClr.querySelector('#labelinprogress');

        expect(inprogressRadioBtn).toBeTruthy();
        expect(inprogressRadioLabel).toBeTruthy();
        expect(taskFilterClr.contains(inprogressRadioBtn) && taskFilterClr.contains(inprogressRadioLabel)).toBe(true);
    });

    it('should have `in progress` input button with the attributes "value:inprogress" and onchange parameter as "inprogress"', () =>{
        const inprogressRadioBtn = document.querySelector('#inprogress'); 

        expect(inprogressRadioBtn.getAttribute('value')).toBe('inprogress');
    });

    it('should have `inprogress` label text content as "inprogress" and attributes as "for:inprogress, title:inprogress" ', () => {
        const inprogressRadioLabel= document.querySelector('#labelinprogress');
        
        expect(inprogressRadioLabel.textContent).toBe('In Progress');
        expect(inprogressRadioLabel.getAttribute('for')).toBe('inprogress');
        expect(inprogressRadioLabel.getAttribute('title')).toBe('In Progress');
    });

    //? Completed Button
    it('should have complete button and label inside taskfilterclr', () => {
        const taskFilterClr = document.querySelector('.taskfilterclr');
        const completedRadioBtn = taskFilterClr.querySelector('#completed');
        const completedRadioLabel= taskFilterClr.querySelector('#labelcompleted');

        expect(completedRadioBtn).toBeTruthy();
        expect(completedRadioLabel).toBeTruthy();
        expect(taskFilterClr.contains(completedRadioBtn) && taskFilterClr.contains(completedRadioLabel)).toBe(true);
    });

    it('should have `in progress` input button with the attributes "value:completed" and onchange parameter as "completed"', () =>{
        const completedRadioBtn = document.querySelector('#completed'); 

        expect(completedRadioBtn.getAttribute('value')).toBe('completed');   
    });

    it('should have `completed` label text content as "completed" and attributes as "for:completed, title:completed" ', () => {
        const completedRadioLabel= document.querySelector('#labelcompleted');
        
        expect(completedRadioLabel.textContent).toBe('Completed');
        expect(completedRadioLabel.getAttribute('for')).toBe('completed');
        expect(completedRadioLabel.getAttribute('title')).toBe('Completed');
    });
});

describe('HTML-No Tasks Section', () => {    

    it('should have a div with class name "notasks" with display as none', () => {
        const noTasksDiv = document.querySelector('.notasks');
        expect(noTasksDiv).toBeTruthy();
        
    });

    it('should have a div with class name "notasks"', () => {
        const noTaskContentDiv = document.querySelector('.notaskcontent');
        expect(noTaskContentDiv).toBeTruthy();
    });

    it('should have a image and h2 tag inside notaskcontent', () => {
        const noTaskContentDiv = document.querySelector('.notaskcontent');
        const noTaskImg = noTaskContentDiv.querySelector('img');
        const noTaskText = noTaskContentDiv.querySelector('h2');

        expect(noTaskContentDiv.contains(noTaskImg)).toBe(true);
        expect(noTaskContentDiv.contains(noTaskText)).toBe(true);
    });

    it('should have a no task image with attributes "source alt:notask image" ', () => {
        
        const noTaskImg = document.querySelector('.notaskcontent img');

        expect(noTaskImg.getAttribute('src')).toBe('img/notask.png');
        expect(noTaskImg.getAttribute('alt')).toBe('notask image'); 
    });


    it('should have a content with text "Add tasks to begin!!"', () => {
        const noTaskText = document.querySelector('.notaskcontent h2');
        expect(noTaskText.textContent).toBe('Add tasks to begin!!');
    });

    
});

describe('HTML-Task List Section', () => {

    it('should have a div with class name "tasklist"', () => {
        const taskListDiv = document.querySelector('.tasklist');
        expect(taskListDiv).toBeTruthy();
    });

    it('should have a div with class name "tasklist"', () => {
        const taskDisplayDiv = document.querySelector('.taskdisplay');
        expect(taskDisplayDiv).toBeTruthy();
    });

    it('should have a ul with id "listtask"', () => {
        const ul = document.querySelector('#listtask');
        expect(ul).toBeTruthy();
    });

    it('should have a ul as child of taskdisplay', () => {
        const taskDisplayDiv = document.querySelector('.taskdisplay');
        const ul = document.querySelector('ul');
        
        expect(taskDisplayDiv.contains(ul)).toBe(true);
    });


});

describe('HTML-Task Count and Clear Section', () => {

    it('should have a div with class name "clear"', () => {
        const clearDiv = document.querySelector('.clear');
        expect(clearDiv).toBeTruthy();
    });

    it('should have a div with class name "count"', () => {
        const countDiv = document.querySelector('.count');
        expect(countDiv).toBeTruthy();
    });

    it('should have a h3 as child of count', () => {
        const countDiv = document.querySelector('.count');
        const h3Element = document.querySelector('h3');
        
        expect(countDiv.contains(h3Element)).toBe(true);
    });

    it('should have a text content of h3 as "You have no tasks here!"', () => {
        const h3Element = document.querySelector('h3');
        expect(h3Element.textContent).toBe('You have no tasks here!');
    });

    it('should have a button with id "clear"', () => {
        const clearBtn = document.querySelector('.clear #clear');
        expect(clearBtn).toBeTruthy();
    });

    it('should have a clear button with attributes "title:Clear, onclick function: clearTask" ', () => {
        const clearBtn = document.querySelector('.clear #clear');

        expect(clearBtn.getAttribute('title')).toBe('Clear'); 
    });

    it('should have a text content of clear button as "Clear Tasks"', () => {
        const clearBtn = document.querySelector('.clear #clear');
        expect(clearBtn.textContent).toBe('Clear Tasks');
    });
});

describe('HTML-Notification Message Section', () => {

    it('should have a paragraph tag', () => {
        const notiTag = document.querySelector('body p');
        const style = window.getComputedStyle(notiTag);

        expect(notiTag).toBeTruthy();
        expect(notiTag.getAttribute('class')).toBe('notification');
        expect(style.visibility).toBe('hidden');
    });

    it('should not contain any text content', () => {
        const notiTag = document.querySelector('body p');
        expect(notiTag.textContent).toBe('');
    })

});

describe('HTML-Toast Message Section', () => {

    it('should have a div with class name "toast-container"', () => {
        const toastDiv = document.querySelector('#toast-container');
        expect(toastDiv).toBeTruthy();
    });

    it('should have a div with class name "toast-message"', () => {
        const toastMsgDiv = document.querySelector('.toast-message');
        expect(toastMsgDiv).toBeTruthy();
    });

    it('should have span and button container as child of toast-message', () => {
        const toastMsgDiv = document.querySelector('.toast-message');
        const toastSpan = document.querySelector('#message-text');
        const toastBtn = document.querySelector('.button-container');
        
        expect(toastMsgDiv.contains(toastSpan)).toBe(true);
        expect(toastMsgDiv.contains(toastBtn)).toBe(true);
    });

    it('should have confirm and cancel button in toast-message', () => {
        const toastBtn = document.querySelector('.button-container');
        const confirmBtn = document.querySelector('#confirm-button');
        const CancelBtn = document.querySelector('#cancel-button');
        
        expect(toastBtn.contains(confirmBtn)).toBe(true);
        expect(toastBtn.contains(CancelBtn)).toBe(true);
    });

    it('should have h3 tags inside button', () => {
        const toastBtn = document.querySelector('.button-container button');
        const h3 = document.querySelector('.button-container h3')

        expect(toastBtn.contains(h3)).toBe(true);
        expect(toastBtn.contains(h3)).toBe(true);
    
    });

    it('should have confirm and cancel button content as yes and no', () => {
        const confirmBtn = document.querySelector('#confirm-button');
        const CancelBtn = document.querySelector('#cancel-button');
        
        expect(confirmBtn.textContent).toBe('Yes');
        expect(CancelBtn.textContent).toBe('No');
    });  
});

describe('HTML-Script Section', () => {

    it('should have the source file', () => {
        const script = document.querySelector('script');
        expect(script.getAttribute('src')).toBe('script.js');
    });
});
    


});

describe('Unit Tests', () => {

    beforeEach(() => {

        const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
        document.body.innerHTML = html;

        ({
        renderTasks,
        renderEachTask,
        addTask,
        validateInput,
        checkBox,
        clearTasks,
        cancelEdit,
        isTaskAlreadyExists,
        filterTasks,
        deleteTask,
        saveTask,
        toggleEdit,
        toggleSave,
        showNotification,
        showToast,
        clearTaskList,
        createTaskElement,
        displayTaskCounts,
        toggleTaskListVisibility,
        disableOtherElements,
        toggleTaskControls,
        toggleToast
        } = require('./script.js'));

        const mockLocalStorage = (() => {
            let store = {};
            return {
                getItem: (key) => store[key] || null,
                setItem: (key, value) => (store[key] = value.toString()),
                clear: () => (store = {}),
                removeItem: (key) => delete store[key],
            };
        })();
        Object.defineProperty(window, 'localStorage', {value: mockLocalStorage,});

        localStorage.clear();
    });
        
    afterEach(() => {
        localStorage.clear();
    });



    // TODO
    describe('RenderTasks', () => {
    
        it('should render tasks from localStorage', () => {
            
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: true }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('statusFilter', 'all');
    
            renderTasks();
           
            const taskElements = document.querySelectorAll('.atask');
            expect(taskElements.length).toBe(tasks.length);
    
            const taskTexts = Array.from(taskElements).map(el => el.querySelector('input').value);
            expect(taskTexts).toEqual(tasks.map(task => task.text));
        });
    
        it('should render only in-progress tasks when filter is set to "inprogress"', () => {
            
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: true }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('statusFilter', 'inprogress');
    
            renderTasks();
    
            const taskElements = document.querySelectorAll('.atask');
            expect(taskElements.length).toBe(1);
            expect(taskElements[0].querySelector('input').value).toBe('Task 1');
        });
    
        it('should render only completed tasks when filter is set to "completed"', () => {
    
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: true }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('statusFilter', 'completed');
    
            renderTasks();
    
            const taskElements = document.querySelectorAll('.atask');
            expect(taskElements.length).toBe(1);
            expect(taskElements[0].querySelector('input').value).toBe('Task 2');
        });
    
        it('should display "no tasks" message if no tasks are available', () => {
     
            localStorage.setItem('tasks', JSON.stringify([]));
            localStorage.setItem('statusFilter', 'all');
    
            renderTasks();
    
            const noTasksMessage = document.querySelector('.notasks');
            expect(noTasksMessage.style.display).toBe('flex');
            const taskList = document.querySelector('.tasklist');
            expect(taskList.style.display).toBe('none');
        });
    });

    //*
    describe('ClearTaskList Function', () => {

        let taskList;

        beforeEach(() => {
            taskList = document.querySelector('#listtask');
        });
    
        it('should clear all tasks from the task list and not other elements', () => {

            document.body.innerHTML = `
                <ul id="listtask">
                    <li>Task 1</li>
                </ul>
                <div id="other-element">This should not be cleared</div>
            `;
    
            clearTaskList();

            expect(taskList.innerHTML).toBe('');
            expect(document.querySelector('#other-element').textContent).toBe('This should not be cleared');
        });
    
        it('should handle an empty task list', () => {

            taskList.innerHTML = '';
    
            clearTaskList();
    
            expect(taskList.innerHTML).toBe('');
        });
    
    });

    //*
    describe('DisplayTaskCounts Function', () => {

        let countDiv;

        beforeEach(() => {
            countDiv = document.querySelector('.count h3');
        });

        it('should display "You have no tasks here!" for an empty task array with default filter', () => {
            
            const tasks = [];
    
            displayTaskCounts(tasks, 'none');
    
            expect(countDiv.textContent).toBe('You have no tasks here!');
        });
    
        it('should display "You have no tasks here!" for an empty task array with filter "all"', () => {
            
            const tasks = [];
    
            displayTaskCounts(tasks, 'all');
            expect(countDiv.textContent).toBe('You have no tasks here!');

            displayTaskCounts(tasks, 'inprogress');
            expect(countDiv.textContent).toBe('You have no tasks to do!');

            displayTaskCounts(tasks, 'completed');
            expect(countDiv.textContent).toBe('You have not completed any tasks!');

        });
    
        it('should display the correct count text for all tasks with 1 task', () => {
    
            const tasks = [
                { id: 1, text: 'Single Task', completed: false }
            ];
    
            displayTaskCounts(tasks, 'all');
            expect(countDiv.textContent).toBe('You have a total of 1 task!');
        });

    
        it('should display the correct count text for in-progress tasks with 1 task', () => {

            const tasks = [
                { id: 1, text: 'In-progress Task', completed: false },
                { id: 2, text: 'Completed Task', completed: true }
            ];
    
            displayTaskCounts(tasks, 'inprogress');
            expect(countDiv.textContent).toBe('You have 1 task to do!');

            displayTaskCounts(tasks, 'completed');
            expect(countDiv.textContent).toBe('You have completed 1 task!');
        });
    
        it('should display the correct count for all tasks', () => {
            
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: true },
                { id: 3, text: 'Task 3', completed: true },
                { id: 4, text: 'Task 4', completed: false }
            ];
            
            displayTaskCounts(tasks, 'all');
            expect(countDiv.textContent).toBe('You have a total of 4 tasks!');

            displayTaskCounts(tasks, 'inprogress');
            expect(countDiv.textContent).toBe('You have 2 tasks to do!');

            displayTaskCounts(tasks, 'completed');
            expect(countDiv.textContent).toBe('You have completed 2 tasks!');
        });    
    
    });

    //*
    describe('FilterTasks Function', () => {

        it('should return an empty array for an empty task list', () => {
            const tasks = [];
            const filteredTasks = filterTasks(tasks, 'all');
            expect(filteredTasks).toEqual([]);
        
            const filteredInProgressTasks = filterTasks(tasks, 'inprogress');
            expect(filteredInProgressTasks).toEqual([]);
        
            const filteredCompletedTasks = filterTasks(tasks, 'completed');
            expect(filteredCompletedTasks).toEqual([]);
        });
    
        it('should return an empty array if no tasks match the filter inprogress', () => {
            const tasks = [
                { id: 1, text: 'Task 1', completed: true },
                { id: 2, text: 'Task 2', completed: true },
            ];
            const filteredTasks = filterTasks(tasks, 'inprogress');
            expect(filteredTasks).toEqual([]);
        });
    
        it('should return an empty array if no tasks match the filter completed', () => {
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: false },
            ];
            const filteredTasks = filterTasks(tasks, 'completed');
            expect(filteredTasks).toEqual([]);
        });
    
        it('should correctly filter tasks based on completion status', () => {
            const tasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: 2, text: 'Task 2', completed: true },
                { id: 3, text: 'Task 3', completed: false },
            ];
    
            const filteredAllTasks = filterTasks(tasks, 'all');
            expect(filteredAllTasks).toEqual(tasks);
        
            const filteredInProgressTasks = filterTasks(tasks, 'inprogress');
            expect(filteredInProgressTasks).toEqual([
                { id: 1, text: 'Task 1', completed: false },
                { id: 3, text: 'Task 3', completed: false },
            ]);
        
            const filteredCompletedTasks = filterTasks(tasks, 'completed');
            expect(filteredCompletedTasks).toEqual([
                { id: 2, text: 'Task 2', completed: true },
            ]);
        });
    });

    // TODO
    describe('RenderEachTask', () => {
    
        test('should create and append a task element with correct content', () => {
            
            const task = {
                id: 1,
                text: 'Sample Task',
                completed: false
            };
    
            renderEachTask(task);
    
            const taskElement = document.querySelector('.atask');
            expect(taskElement).not.toBeNull();
    
            const inputElement = taskElement.querySelector('input');
            expect(inputElement).not.toBeNull();
            expect(inputElement.value).toBe(task.text);
    
            const editButton = taskElement.querySelector('button[title="Edit Task"]');
            expect(editButton).not.toBeNull();
    
            const deleteButton = taskElement.querySelector('button[title="Delete Task"]');
            expect(deleteButton).not.toBeNull();
            
            const checkboxButton = taskElement.querySelector('button[title="Status"]');
            expect(checkboxButton).not.toBeNull();
            expect(checkboxButton.querySelector('img').src).toContain('img/notdone.png');
        });
    
        test('should apply the correct opacity based on the task completion status', () => {
    
            const task = {
                id: 2,
                text: 'Completed Task',
                completed: true
            };
    
            renderEachTask(task);
    
            const taskElement = document.querySelector('.atask');
            expect(taskElement.style.opacity).toBe('0.6');
        });
    
        test('should render the save/cancel buttons only when editing', () => {
            
            const task = {
                id: 3,
                text: 'Editable Task',
                completed: false
            };
    
            renderEachTask(task);
    
            const saveCancelDiv = document.querySelector(`#save-${task.id}`);
            expect(saveCancelDiv.style.display).toBe('none');
        });
    });

    // TODO
    describe.only('CreateTaskElement Function', () => {

        it('should create a task element with the correct structure', () => {
           
    
            const task = {
                id: 1,
                text: 'Sample Task',
                completed: false
            };
    
            const taskElement = createTaskElement(task);
    
            expect(taskElement).toBeTruthy();
            expect(taskElement.style.opacity).toBe('1');


            expect(taskElement.querySelector('button[title="Status"]')).toBeTruthy();

            expect(taskElement.querySelector('.eachtask')).toBeTruthy();
            expect(taskElement.querySelector('input[type="text"]').id).toBe('onetask-1');
            expect(taskElement.querySelector('#onetask-1').value).toBe('Sample Task');
            expect(taskElement.querySelector('#onetask-1').maxLength).toBe(150);
            expect(taskElement.querySelector('#onetask-1').getAttribute('readonly')).toBe('true');

            expect(taskElement.querySelector('.editdel')).toBeTruthy();
            expect(taskElement.querySelector('.editdel').id).toBe('edit-1');

            expect(taskElement.querySelector('#edit-1 button[title="Status"').id).toBe('checkbox-1');
            expect(taskElement.querySelector('#edit-1 #checkbox-1').disabled).toBeFalsy();
            
            expect(taskElement.querySelector('#edit-1 button[title="Status"]').querySelector('img').src).toContain('img/notdone.png');
            expect(taskElement.querySelector('#edit-1 button[title="Status"]').querySelector('img').alt).toBe('checkbox');
            
            expect(taskElement.querySelector('button[title="Edit Task"]').querySelector('img').src).toContain('img/edit.png');
            expect(taskElement.querySelector('button[title="Edit Task"]').querySelector('img').alt).toBe('edit icon');

            expect(taskElement.querySelector('button[title="Delete Task"]').querySelector('img').src).toContain('img/delete.png');
            expect(taskElement.querySelector('button[title="Delete Task"]').querySelector('img').alt).toBe('delete icon');

            expect(taskElement.querySelector('.savecancel')).toBeTruthy();
            expect(taskElement.querySelector('.savecancel').id).toBe('save-1');
            expect(taskElement.querySelector('.savecancel').style.display).toBe('none');

            expect(taskElement.querySelector('#save-1 button[title="Status"').id).toBe('checkbox-1');
            expect(taskElement.querySelector('#save-1 #checkbox-1').disabled).toBe(true);
            
            expect(taskElement.querySelector('#save-1 button[title="Status"]').querySelector('img').src).toContain('img/notdone.png');
            expect(taskElement.querySelector('#save-1 button[title="Status"]').querySelector('img').alt).toBe('checkbox');
            
            expect(taskElement.querySelector('button[title="Save Task"]').querySelector('img').src).toContain('img/save.png');
            expect(taskElement.querySelector('button[title="Save Task"]').querySelector('img').alt).toBe('save icon');

            expect(taskElement.querySelector('button[title="Cancel Edit"]').querySelector('img').src).toContain('img/wrong.png');
            expect(taskElement.querySelector('button[title="Cancel Edit"]').querySelector('img').alt).toBe('cancel icon');
    
            expect(taskElement.querySelector('button[title="Edit Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Delete Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Save Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Cancel Edit"]').disabled).toBeFalsy();

        });

        it('should create a task element with the correct structure', () => {
           
    
            const task = {
                id: 2,
                text: 'Sample Task',
                completed: true
            };
    
            const taskElement = createTaskElement(task);
    
            expect(taskElement).toBeTruthy();
            expect(taskElement.style.opacity).toBe('0.6');


            expect(taskElement.querySelector('button[title="Status"]')).toBeTruthy();

            expect(taskElement.querySelector('.eachtask')).toBeTruthy();
            expect(taskElement.querySelector('input[type="text"]').id).toBe('onetask-2');
            expect(taskElement.querySelector('#onetask-2').value).toBe('Sample Task');
            expect(taskElement.querySelector('#onetask-2').maxLength).toBe(150);
            expect(taskElement.querySelector('#onetask-2').getAttribute('readonly')).toBe('true');

            expect(taskElement.querySelector('.editdel')).toBeTruthy();
            expect(taskElement.querySelector('.editdel').id).toBe('edit-2');

            expect(taskElement.querySelector('#edit-2 button[title="Status"').id).toBe('checkbox-2');
            expect(taskElement.querySelector('#edit-2 button[title="Status"').disabled).toBeFalsy();
            
            expect(taskElement.querySelector('#edit-2 button[title="Status"]').querySelector('img').src).toContain('img/done.png');
            expect(taskElement.querySelector('#edit-2 button[title="Status"]').querySelector('img').alt).toBe('checkbox');
            
            expect(taskElement.querySelector('button[title="Edit Task"]').querySelector('img').src).toContain('img/edit.png');
            expect(taskElement.querySelector('button[title="Edit Task"]').querySelector('img').alt).toBe('edit icon');

            expect(taskElement.querySelector('button[title="Delete Task"]').querySelector('img').src).toContain('img/delete.png');
            expect(taskElement.querySelector('button[title="Delete Task"]').querySelector('img').alt).toBe('delete icon');

            expect(taskElement.querySelector('.savecancel')).toBeTruthy();
            expect(taskElement.querySelector('.savecancel').id).toBe('save-2');
            expect(taskElement.querySelector('.savecancel').style.display).toBe('none');

            expect(taskElement.querySelector('#save-2 button[title="Status"').id).toBe('checkbox-2');
            expect(taskElement.querySelector('#save-2 button[title="Status"').disabled).toBe(true);
            
            expect(taskElement.querySelector('#save-2 button[title="Status"]').querySelector('img').src).toContain('img/done.png');
            expect(taskElement.querySelector('#save-2 button[title="Status"]').querySelector('img').alt).toBe('checkbox');
            
            expect(taskElement.querySelector('button[title="Save Task"]').querySelector('img').src).toContain('img/save.png');
            expect(taskElement.querySelector('button[title="Save Task"]').querySelector('img').alt).toBe('save icon');

            expect(taskElement.querySelector('button[title="Cancel Edit"]').querySelector('img').src).toContain('img/wrong.png');
            expect(taskElement.querySelector('button[title="Cancel Edit"]').querySelector('img').alt).toBe('cancel icon');
    
            expect(taskElement.querySelector('button[title="Edit Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Delete Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Save Task"]').disabled).toBeFalsy();
            expect(taskElement.querySelector('button[title="Cancel Edit"]').disabled).toBeFalsy();

        });
    

    
        
    
    });

    //*
    describe('ToggleTaskVisibility Function', () => {
        
        let noTasks, showtask, taskActions, countDiv;
    
        beforeEach(() => {

            noTasks = document.querySelector('.notasks');
            showtask = document.querySelector('.tasklist');
            taskActions = document.querySelector('.tasktext');
            countDiv = document.querySelector('.clear');
        });
    
        it('should hide task list and display no tasks message when there are no tasks', () => {

            const tasks = [];
            toggleTaskListVisibility(tasks);
    
            expect(noTasks.style.display).toBe('flex');
            expect(showtask.style.display).toBe('none');
            expect(taskActions.style.display).toBe('none');
            expect(countDiv.style.display).toBe('none');
        });
    
        it('should show task list and hide no tasks message when there are tasks', () => {
            const tasks = [{ id: 1, text: 'Sample Task', completed: false }];
            toggleTaskListVisibility(tasks);
    
            expect(noTasks.style.display).toBe('none');
            expect(showtask.style.display).toBe('flex');
            expect(taskActions.style.display).toBe('flex');
            expect(countDiv.style.display).toBe('flex');
        });
    
    });


    // TODO
    describe('AddTask Function', () => {

        beforeEach(() => {

            inputBox = document.querySelector('#input');
            notification = document.querySelector('.notification');

        });

        it('should add a task and update localStorage', () => {
            
            const tasksBefore = JSON.parse(localStorage.getItem('tasks'));
            const taskIdCounterBefore = JSON.parse(localStorage.getItem('taskIdCounter'));
            const statusFilterBefore= localStorage.getItem('statusFilter');

            expect(tasksBefore).toBeNull;
            expect(taskIdCounterBefore).toBeNull;
            expect(statusFilterBefore).toBeNull;

            expect(inputBox.value).toBe('');
            expect(document.activeElement).not.toBe(inputBox);
    
            inputBox.value = 'Test Task';
            addTask();

            const tasks = JSON.parse(localStorage.getItem('tasks'));
            const taskIdCounter = JSON.parse(localStorage.getItem('taskIdCounter'));
            const statusFilter= localStorage.getItem('statusFilter');
    
            expect(tasks).toHaveLength(1);
            expect(tasks[0].id).toBe(1);
            expect(tasks[0].text).toBe('Test Task');
            expect(tasks[0].completed).toBe(false);

            expect(taskIdCounter).toBe(1);
            expect(statusFilter).toBe('all');

            expect(inputBox.value).toBe('');
            expect(document.activeElement).toBe(inputBox);
            
            expect(notification.textContent).toBe("Task added successfully");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');
        });

        it('should add a task and update localStorage when a task already exists', () => {

            const task = [
                { id: 1, text: 'Task 1', completed: true }
            ];
            localStorage.setItem('tasks', JSON.stringify(task));
            localStorage.setItem('taskIdCounter', 1);


            inputBox.value = 'Test Task';
            addTask();

            const tasks = JSON.parse(localStorage.getItem('tasks'));
            const taskIdCounter = JSON.parse(localStorage.getItem('taskIdCounter'));
            const statusFilter= localStorage.getItem('statusFilter');
    
            expect(tasks).toHaveLength(2);

            expect(tasks[0].id).toBe(1);
            expect(tasks[0].text).toBe('Task 1');
            expect(tasks[0].completed).toBe(true);

            expect(tasks[1].id).toBe(2);
            expect(tasks[1].text).toBe('Test Task');
            expect(tasks[1].completed).toBe(false);

            expect(taskIdCounter).toBe(2);
            expect(statusFilter).toBe('all');

            expect(inputBox.value).toBe('');
            
        });
    
        it('should handle tasks with special characters correctly', () => {

            localStorage.setItem('taskIdCounter', 1);

            inputBox.value = 'Task with @special #characters!';
            addTask();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            expect(tasks).toHaveLength(1);
            expect(tasks[0].text).toBe('Task with @special #characters!');
        });
    
        it('should not add a duplicate task', () => {
    
            inputBox.value = 'Duplicate Task';
            addTask(); 
    
            inputBox.value = 'Duplicate Task'; 
            addTask(); 
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));

    
            expect(tasks).toHaveLength(1); 
            expect(tasks[0].text).toBe('Duplicate Task');

            expect(inputBox.value).toBe('');
            const styleInputBox = window.getComputedStyle(inputBox);
            expect(styleInputBox.borderBottom).toBe('2px solid red');
    
            expect(notification.textContent).toBe("Task already exists!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
        });
    
        it('should treat tasks with different cases as duplicates', () => {

            inputBox.value = 'Case Insensitive Task';
            addTask(); 
            
            inputBox.value = 'case insensitive task'; 
            addTask();
            
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            expect(tasks).toHaveLength(1);

            expect(notification.textContent).toBe("Task already exists!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
        });
    
        it('should not add a task if input is empty', () => {
    
            inputBox.value = '';
            addTask();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            expect(tasks).toBeNull();

            expect(inputBox.value).toBe('');
            const styleInputBox = window.getComputedStyle(inputBox);
            expect(styleInputBox.borderBottom).toBe('2px solid red');
    
            expect(notification.textContent).toBe("Task cannot be empty!!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
            
        });
    
        it('should not add a task if input contains only spaces', () => {
    
            inputBox.value = '   ';
    
            addTask();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            expect(tasks).toBeNull();
    
            const notification = document.querySelector('.notification');
    
            expect(notification.textContent).toBe("Task cannot contain only spaces!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
            
        });
    
    
    });

    describe('ValidateInput function', () => {

        let notification

        beforeEach(() => {

            notification = document.querySelector('.notification');

        });


        it('should return false if input is empty', () => {

            const inputValue = '';

            const result = validateInput(inputValue);
    
            expect(result).toBe(false);

            expect(notification.textContent).toBe("Task cannot be empty!!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
            
        });
    
        it('should return false if input is only whitespace', () => {
           
            const inputValue = '    ';

            const result = validateInput(inputValue);
    
            expect(result).toBe(false);

            expect(notification.textContent).toBe("Task cannot contain only spaces!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
            
        });

        it('should return false if input is valid but not unique', () => {

            const tasks = [
                { id: 1, text: 'Task 1' }
              ];
            localStorage.setItem('tasks', JSON.stringify(tasks));

            const inputValue = 'Task 1';
    
            const result = validateInput(inputValue,-1);
    
            expect(result).toBe(false);

            expect(notification.textContent).toBe("Task already exists!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('rgb(184, 13, 13)');
            
        });

        it('should return false if input is valid but not unique after trim', () => {

            const tasks = [
                { id: 1, text: 'Task 1' }
              ];
            localStorage.setItem('tasks', JSON.stringify(tasks));

            const inputValue = '   Task 1    ';
    
            const result = validateInput(inputValue,-1);
    
            expect(result).toBe(false);
            
        });

        it('should return false if input is valid but not unique after space characters replace', () => {

            const tasks = [
                { id: 1, text: 'Task 1' }
              ];
            localStorage.setItem('tasks', JSON.stringify(tasks));

            const inputValue = 'Task           1';
    
            const result = validateInput(inputValue,-1);
    
            expect(result).toBe(false);
            
        });


        it('should return true if input is valid and unique', () => {
            
            const inputValue = 'Valid Task';

            const result = validateInput(inputValue);
    
            expect(result).toBe(true);
            
        });
    
    });

    describe('IsTaskAlreadyExists Function', () => {

        it('should return false when there are no tasks', () => {
    
            localStorage.setItem('tasks', JSON.stringify([]));
    
            expect(isTaskAlreadyExists('New Task', -1)).toBeFalsy();
    
        });

        it('should return false when localStorage does not contain the "tasks" key', () => {
            
            localStorage.removeItem('tasks');
        
            expect(isTaskAlreadyExists('Task 1', -1)).toBeFalsy();
        });
        
        it('should return false when task does not exist', () => {
    
            const tasks = [
              { id: 1, text: 'Task 1' },
              { id: 2, text: 'Task 2' }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            expect(isTaskAlreadyExists('New Task', -1)).toBeFalsy();
    
        });
        
        it('should return true when task already exists', () => {
    
            const tasks = [
              { id: 1, text: 'Task 1' },
              { id: 2, text: 'Task 2' }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            expect(isTaskAlreadyExists('Task 1', -1)).toBeTruthy();
    
        });
    
        it('should return true when task already exists but in different case', () => {
            
            const tasks = [
              { id: 1, text: 'tAsK 1' },
              { id: 2, text: 'Task 2' }
            ];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            expect(isTaskAlreadyExists('Task 1', -1)).toBeTruthy();
    
        });
    
        it('should return false when task exists but has the same id', () => {
        
            const tasks = [
              { id: 1, text: 'Task 1' },
              { id: 2, text: 'Task 2' }
            ];
    
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            expect(isTaskAlreadyExists('Task 1', 1)).toBeFalsy();
    
        });

        it('should return false when task exists but has the different id', () => {
        
            const tasks = [
              { id: 1, text: 'Task 1' },
              { id: 2, text: 'Task 2' }
            ];
    
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            expect(isTaskAlreadyExists('Task 1', 2)).toBeTruthy();
    
        });
    
    });

    

    describe('CheckBox function', () => {

    
        it('should toggle the completion status of a task and re-render tasks', () => {
            const taskId = 1;
            const initialTasks = [
                { id: taskId, text: 'Sample Task', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(initialTasks));
    
            checkBox(taskId);
    
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            const updatedTask = updatedTasks.find(task => task.id === taskId);
            expect(updatedTask.completed).toBe(true); 

            checkBox(taskId);
    
            const updatedTasks2 = JSON.parse(localStorage.getItem('tasks'));
            const updatedTask2 = updatedTasks2.find(task => task.id === taskId);
            expect(updatedTask2.completed).toBe(false); 
        
        });
    
        it('should toggle the completion status of the correct task when multiple tasks exist', () => {
            const taskId = 2;
            const initialTasks = [
                { id: 1, text: 'Task 1', completed: false },
                { id: taskId, text: 'Task 2', completed: false },
                { id: 3, text: 'Task 3', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(initialTasks));
        
            checkBox(taskId);
        
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            const updatedTask = updatedTasks.find(task => task.id === taskId);
            const unUpdatedTask1 = updatedTasks.find(task => task.id === 1);
            const unUpdatedTask3 = updatedTasks.find(task => task.id === 1);

            expect(updatedTask.completed).toBe(true);
            expect(unUpdatedTask1.completed).toBe(false);
            expect(unUpdatedTask3.completed).toBe(false);

        });
    });




    describe('Delete Function', () => {

        let notification, confirmButton, cancelButton

        beforeEach(() => {

            notification = document.querySelector('.notification');
            confirmButton = document.getElementById('confirm-button');
            cancelButton = document.getElementById('cancel-button');

            const sampleTasks = [
                { id: '1', text: 'Task to Delete', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '2');
    
    
            renderTasks();

        });

        it('should delete a task and update localStorage and UI on confirmation', () => {
    
            deleteTask('1');

            confirmButton.click();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toBeNull;
    
            expect(document.querySelector('#onetask-1')).toBeNull(); 

            expect(notification.textContent).toBe("Task deleted successfully");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');
    
        });
    
        it('should cancel deletion and show cancellation message on cancel', () => {
    
            deleteTask('1');

            cancelButton.click();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toHaveLength(1); 
            expect(document.querySelector('#onetask-1')).toBeTruthy(); 

            expect(notification.textContent).toBe("Task deletion canceled");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('red');
    
    
        });
    
        it('should delete a task correctly when there are multiple tasks', () => {
            const sampleTasks = [
                { id: '1', text: 'Task 1', completed: false },
                { id: '2', text: 'Task 2', completed: false },
                { id: '3', text: 'Task 3', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '3');
    
            renderTasks();
    
            deleteTask('2');
   
            confirmButton.click();
    
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toHaveLength(2);
            expect(tasks.some(task => task.id === '2')).toBeFalsy(); 
            expect(tasks.some(task => task.id === '1')).toBeTruthy(); 
            expect(tasks.some(task => task.id === '3')).toBeTruthy(); 
        });
      
    });

    

    describe('ClearTasks Function', () => {

        let confirmButton, cancelButton, notification

        beforeEach(() => {

            const sampleTasks = [
                { id: 1, text: 'Task 1', completed: false }, 
                { id: 2, text: 'Task 2', completed: true } 
            ];
            
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));

            confirmButton = document.getElementById('confirm-button');
            cancelButton = document.getElementById('cancel-button');
            notification = document.querySelector('.notification');
        });

        it('should display the correct confirmation message for different filters', () => {
            const filters = ['all', 'inprogress', 'completed'];

            filters.forEach(filter => {
                localStorage.setItem('statusFilter', filter);
                clearTasks();

                const message = document.querySelector('#message-text').textContent;
                switch (filter) {
                    case 'all':
                        expect(message).toBe('Are you sure you want to clear all tasks?');
                        break;
                    case 'inprogress':
                        expect(message).toBe('Are you sure you want to clear all in-progress tasks?');
                        break;
                    case 'completed':
                        expect(message).toBe('Are you sure you want to clear all completed tasks?');
                        break;
                }

            });    
        });
        
        it('should clear all tasks when filter is "all"', () => {

            localStorage.setItem('statusFilter', 'all');
            
            clearTasks();

            confirmButton.click();
            
            expect(localStorage.getItem('tasks')).toBe(null); 

            expect(notification.textContent).toBe("All tasks cleared!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');

        });

        it('should clear only in-progress tasks when filter is "inprogress"', () => {
            
            localStorage.setItem('statusFilter', 'inprogress');
            
            clearTasks();

            confirmButton.click();

            const remainingTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(remainingTasks.length).toBe(1); 
            expect(remainingTasks[0].completed).toBe(true);
            expect(remainingTasks[0].text).toBe('Task 2');

            expect(notification.textContent).toBe("Inprogress tasks cleared!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');
        });

        it('should clear only completed tasks when filter is "completed"', () => {
            
            localStorage.setItem('statusFilter', 'completed');

            clearTasks();

            confirmButton.click();

            const remainingTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(remainingTasks.length).toBe(1); 
            expect(remainingTasks[0].completed).toBe(false);
            expect(remainingTasks[0].text).toBe('Task 1');

            expect(notification.textContent).toBe("Completed tasks cleared!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');
        });

        it('should cancel clear when cancel button is clicked', () => {

            localStorage.setItem('statusFilter', 'all');
            
            clearTasks();

            cancelButton.click();
            
            expect(localStorage.getItem('tasks')).not.toBe(null);
            
            expect(notification.textContent).toBe("Task clearing canceled");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('red');
        });

        it('should handle case where there are no tasks to clear', () => {
            
            localStorage.setItem('tasks', JSON.stringify([])); 
            localStorage.setItem('statusFilter', 'all');
            
            clearTasks();

            confirmButton.click();

            expect(localStorage.getItem('tasks')).toBeNull();
        });

        
        
        it('should reset taskIdCounter when clearing all tasks', () => {
            localStorage.setItem('tasks', JSON.stringify([{ id: 1, text: 'Task 1', completed: false }]));
            localStorage.setItem('taskIdCounter', '5');
            localStorage.setItem('statusFilter', 'all');
            
            clearTasks();

            confirmButton.click();

            expect(localStorage.getItem('taskIdCounter')).toBeNull(); 
            expect(localStorage.getItem('tasks')).toBeNull(); 
        });

    });




    describe('ToggleEdit Function', () => {

        beforeEach(() => {

            const sampleTasks = [
                { id: '1', text: 'Editable Task', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '1');
    
            renderTasks();

        })

        it('should enable editing mode for a task', () => {
    
            toggleEdit('1');
        
    
            const taskInput = document.querySelector('#onetask-1');
            expect(taskInput).toBeTruthy();
            expect(taskInput.hasAttribute('readonly')).toBe(false);
            expect(taskInput.readOnly).toBe(false);
            expect(taskInput.style.borderBottom).toBe('2px solid #461b80');
            expect(document.activeElement).toBe(taskInput);
        });
    
    
        it('should restore input border style on input event', () => {
    
            toggleEdit('1');
    
            const taskInput = document.querySelector('#onetask-1');
            taskInput.dispatchEvent(new Event('input'));
    
            expect(taskInput.readOnly).toBe(false);
            expect(taskInput.style.borderBottom).toBe('2px solid #461b80');
        });
    
    }); 

    describe('DisableOtherElements Function', () => {

        let inputBox, addButton, clearButton, allEditButtons, radioButtons

        beforeEach(() => {

            inputBox = document.getElementById('input');
            addButton = document.getElementById('add');
            clearButton = document.getElementById('clear');
            allEditButtons = document.querySelectorAll('.editdel button');
            radioButtons = document.querySelectorAll('input[name="taskFilter"]');

            const sampleTasks = [
                { id: '1', text: 'Task Text 1', completed: false }
            ];

            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
    
            renderTasks();


        })

        it('should disable all elements when passed true', () => {
    
            disableOtherElements(true);
    
            expect(inputBox.disabled).toBe(true);
            expect(addButton.disabled).toBe(true);
            expect(clearButton.disabled).toBe(true);
    
            allEditButtons.forEach(button => {
                expect(button.disabled).toBe(true);
            });
    
            radioButtons.forEach(radio => {
                expect(radio.disabled).toBe(true);
            });
        });
    
        it('should enable all elements when passed false', () => {
    
            disableOtherElements(false);
    
            expect(inputBox.disabled).toBe(false);
            expect(addButton.disabled).toBe(false);
            expect(clearButton.disabled).toBe(false);
    
            allEditButtons.forEach(button => {
                expect(button.disabled).toBe(false);
            });
    
            radioButtons.forEach(radio => {
                expect(radio.disabled).toBe(false);
            });
        });
    
    });

    describe('SaveTask Function', () => {

        let notification,confirmButton, cancelButton

        beforeEach(() => {

            notification = document.querySelector('.notification');
            confirmButton = document.getElementById('confirm-button');
            cancelButton = document.getElementById('cancel-button');
            

            const sampleTasks = [
                { id: '1', text: 'Old Task Text', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '1');
    
            renderTasks();

        });

        it('should update task text and re-render tasks', () => {
            
    
            const taskInput = document.querySelector('#onetask-1');
            taskInput.value = 'Updated Task Text';
            saveTask('1'); 
    
            confirmButton.click();
    
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));

            expect(updatedTasks).toHaveLength(1);
            expect(updatedTasks[0].text).toBe('Updated Task Text');
            expect(taskInput.value).toBe('Updated Task Text'); 

            expect(notification.textContent).toBe("Task updated successfully!");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('green');
        });
    
        it('should cancel saving of task text and re-render tasks', () => {
            
    
            const taskInput = document.querySelector('#onetask-1');
            taskInput.value = 'Updated Task Text';
            saveTask('1'); 
    
            cancelButton.click();
    
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(updatedTasks).toHaveLength(1);
            expect(updatedTasks[0].text).toBe('Old Task Text');
            expect(taskInput.value).toBe('Old Task Text'); 

            expect(notification.textContent).toBe("Task saving canceled");
            const style = window.getComputedStyle(notification);
            expect(style.backgroundColor).toBe('red');
        });
    
        
        it('should not update task text when input empty and re-render tasks', () => {
    
            const taskInput = document.querySelector('#onetask-1');

            taskInput.value = '';
            saveTask('1');
    
    
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(updatedTasks).toHaveLength(1);
            expect(updatedTasks[0].text).toBe('Old Task Text');
            expect(taskInput.value).toBe(''); 
    
            const notificationElement = document.querySelector('.notification');
            expect(notificationElement.textContent).toBe('Task cannot be empty!!'); 
        });
    
        it('should not update task text when input empty and re-render tasks', () => {
 
            const taskInput = document.querySelector('#onetask-1');
            taskInput.value = '     ';
            saveTask('1'); 
    
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(updatedTasks).toHaveLength(1);
            expect(updatedTasks[0].text).toBe('Old Task Text');
    
            const notificationElement = document.querySelector('.notification');
            expect(notificationElement.textContent).toBe('Task cannot contain only spaces!'); // Example error message
        });
    
        test('should not allow saving a task with text that already exists', () => {
     
            const sampleTasks = [
                { id: 1, text: 'Existing Task', completed: false },
                { id: 2, text: 'Another Task', completed: false }
            ];
            
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '1');
    
            renderTasks();

            const taskInput = document.querySelector('#onetask-1');
            taskInput.value = 'Another Task';
            saveTask('1'); 
    
            confirmButton.click();
        
            const notificationElement = document.querySelector('.notification');
            expect(notificationElement.textContent).toBe('Task already exists!');
    
            expect(localStorage.getItem('tasks')).toBe(JSON.stringify([
                { id: 1, text: 'Existing Task', completed: false },
                { id: 2, text: 'Another Task', completed: false }
            ]));
    
        });
    
        
        
    });

    describe('CancelEdit Function', () => {

        beforeEach(() => {

            const sampleTasks = [
                { id: '1', text: 'Task 1', completed: false },
                { id: '2', text: 'Task 2', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '2');
    
            renderTasks();

        });
    
        it('should restore original task text on cancel edit', () => {
    
            const taskInput = document.querySelector('#onetask-1');
            taskInput.value = 'Updated Task Text';
    
            cancelEdit('1'); 
            
            expect(taskInput.value).toBe('Task 1');
            expect(document.querySelector('#save-1').style.display).toBe('none');
            expect(document.querySelector('#edit-1').style.display).toBe('flex'); 
        });
    
        it('should not affect other tasks when canceling edit', () => {
            
    
            const taskInput1 = document.querySelector('#onetask-1');
            const taskInput2 = document.querySelector('#onetask-2');
            taskInput1.value = 'Updated Task 1 Text';
            taskInput2.value = 'Updated Task 2 Text';
    
            cancelEdit('1'); 
            
            expect(taskInput1.value).toBe('Task 1'); 
            expect(taskInput2.value).toBe('Updated Task 2 Text'); 
        });
    
    });

    describe('ToggleSave function', () => {

        it('toggleSave sets task text to readonly and border style to none', () => {
            const sampleTasks = [
                { id: '1', text: 'Old Task Text', completed: false }
            ];
            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
            localStorage.setItem('taskIdCounter', '1');
        
            renderTasks();
        
            const taskText = document.querySelector(`#onetask-1`);
        
            expect(taskText.readOnly).toBe(true);
            
            toggleEdit('1');
        
            expect(taskText.readOnly).toBe(false);
        
            toggleSave('1');
        
            expect(taskText.readOnly).toBe(true);
            expect(taskText.style.borderStyle).toBe('none');
        });
    });

    describe('ToggleTaskControls function', () => {

        beforeEach(() => {

            const sampleTasks = [
                { id: '1', text: 'Task Text 1', completed: false },
                { id: '2', text: 'Task Text 2', completed: false }
            ];

            localStorage.setItem('tasks', JSON.stringify(sampleTasks));
    
            renderTasks();

        });


        it('should hide the edit div and show the save div', () => {

            toggleTaskControls('1', 'edit', 'save');

            const fromDiv = document.querySelector('#edit-1');
            const toDiv = document.querySelector('#save-1');

            expect(fromDiv.style.display).toBe('none');
            expect(toDiv.style.display).toBe('flex');

        });

    
        it('should hide the save div and show the edit div', () => {
            
            toggleTaskControls('1', 'save', 'edit');
    
            const fromDiv = document.querySelector('#save-1');
            const toDiv = document.querySelector('#edit-1');

            expect(fromDiv.style.display).toBe('none');
            expect(toDiv.style.display).toBe('flex');
        });
    
        it('should handle cases where both elements are initially not visible', () => {

            const fromDiv = document.querySelector('#edit-1');
            fromDiv.style.display = 'none';
            const toDiv = document.querySelector('#save-1');
            toDiv.style.display = 'none';
        
            toggleTaskControls('1', 'edit', 'save');
        
            expect(fromDiv.style.display).toBe('none');
            expect(toDiv.style.display).toBe('flex');
        });
    
        it('should handle cases where both elements are initially visible', () => {
            
        
            const fromDiv = document.querySelector('#edit-1');
            fromDiv.style.display = 'flex';
            const toDiv = document.querySelector('#save-1');
            toDiv.style.display = 'flex';
        
            toggleTaskControls('1', 'edit', 'save');
        
            expect(fromDiv.style.display).toBe('none');
            expect(toDiv.style.display).toBe('flex');
        });

        it('should hide the edit element and show the save element of multiple tasks', () => {

            toggleTaskControls('1', 'edit', 'save');
            toggleTaskControls('1', 'save', 'edit');
            toggleTaskControls('2', 'edit', 'save');
            

            const fromDiv = document.querySelector('#edit-1');
            const toDiv = document.querySelector('#save-1');

            const fromDiv2 = document.querySelector('#edit-2');
            const toDiv2 = document.querySelector('#save-2');
    

            expect(fromDiv.style.display).toBe('flex');
            expect(toDiv.style.display).toBe('none');

            expect(fromDiv2.style.display).toBe('none');
            expect(toDiv2.style.display).toBe('flex');
        });
        
        
        
    
    
    });



    describe('ShowNotification', () => {
    
        let notification;
    
        beforeEach(() => {
            const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
            document.body.innerHTML = html;
            require('./script.js');
    
            notification = document.querySelector('.notification');
    
            jest.useFakeTimers();
        });
    
        afterEach(() => {
            
            jest.useRealTimers();
        });
    
        it('should display the notification with the correct text and color', () => {
            const text = 'Test notification';
            const color = 'red';
            
            showNotification(text, color);
            
            expect(notification.textContent).toBe(text);
            expect(notification.style.backgroundColor).toBe(color);
            expect(notification.style.visibility).toBe('visible');
        });
    
        it('should not hide the notification before the timeout', () => {
            const text = 'Test notification';
            const color = 'red';
            
            showNotification(text, color);
            
            jest.advanceTimersByTime(2999);
            
            expect(notification.textContent).toBe(text);
            expect(notification.style.backgroundColor).toBe(color);
            expect(notification.style.visibility).toBe('visible');
        });
    
        it('should hide the notification after the timeout', () => {
            const text = 'Test notification';
            const color = 'red';
            
            showNotification(text, color);
            
            jest.advanceTimersByTime(3000);
            
            expect(notification.textContent).toBe('');
            expect(notification.style.visibility).toBe('hidden');
        });
       
        it('should display the notification with default text and color when no parameters are provided', () => {
            showNotification();
            
            expect(notification.textContent).toBe('Notification');
            expect(notification.style.backgroundColor).toBe('blue');
            expect(notification.style.visibility).toBe('visible');
        });
    
        it('should display the notification with default text when color is not provided', () => {
            showNotification('Custom message');
            
            expect(notification.textContent).toBe('Custom message');
            expect(notification.style.backgroundColor).toBe('blue');
            expect(notification.style.visibility).toBe('visible');
        });
    
        it('should display the notification with default color when text is not provided', () => {
            showNotification(undefined, 'red');
            
            expect(notification.textContent).toBe('Notification');
            expect(notification.style.backgroundColor).toBe('red');
            expect(notification.style.visibility).toBe('visible');
        });
    
    });

    describe('ShowToast', () => {

        let mockOnConfirm, mockOnCancel, toastContainer, messageText, confirmButton, cancelButton;

        beforeEach(() => {
            
            mockOnConfirm = jest.fn();
            mockOnCancel = jest.fn();
            toastContainer = document.getElementById('toast-container');
            messageText = document.getElementById('message-text');
            confirmButton = document.getElementById('confirm-button');
            cancelButton = document.getElementById('cancel-button');
    
            jest.useFakeTimers();
    
        });
    
        afterEach(() => {
            jest.useRealTimers();
        });
    
        it('should display toast with correct message', () => {

            showToast('Test message', mockOnConfirm, mockOnCancel);
    
            expect(toastContainer.style.display).toBe('flex');
            expect(messageText.textContent).toBe('Test message');
        });
    
        it('should call onConfirm and hide toast when confirm button is clicked', () => {

            showToast('Test message', mockOnConfirm, mockOnCancel);

            confirmButton.click();
    
            expect(mockOnConfirm).toHaveBeenCalled();
            expect(toastContainer.style.display).toBe('none');
        });
    
        it('should call onCancel and hide toast when cancel button is clicked', () => {
            showToast('Test message', mockOnConfirm, mockOnCancel);
    
            cancelButton.click();
    
            expect(mockOnCancel).toHaveBeenCalled();
            expect(toastContainer.style.display).toBe('none');
        });
    
        it('should keep the toast visible if no interaction occurs', () => {
            const mockOnConfirm = jest.fn();
            const mockOnCancel = jest.fn();
        
            showToast('Test message', mockOnConfirm, mockOnCancel);
        
            const toastContainer = document.getElementById('toast-container');
            expect(toastContainer.style.display).toBe('flex');
        
            jest.advanceTimersByTime(5000);
            expect(toastContainer.style.display).toBe('flex');
        });
    
    });

    describe('ToggleToast Function', () => {

        let toastContainer

        beforeEach(() => {

            toastContainer = document.querySelector('#toast-container');

        });

        it('should show the toast container when visible is true', () => {
    
            toggleToast(true);
    
            expect(toastContainer.style.display).toBe('flex');
        });
    
        it('should hide the toast container when visible is false', () => {
    
            toggleToast(false);
    
            expect(toastContainer.style.display).toBe('none');
        });
    
        it('should handle toggling between visible and hidden states correctly', () => {
    
            toggleToast(true);
            expect(toastContainer.style.display).toBe('flex');
    
            toggleToast(false);
            expect(toastContainer.style.display).toBe('none');
    
            toggleToast(true);
            expect(toastContainer.style.display).toBe('flex');
        });
    
        it('should handle undefined and null input gracefully', () => {
            
            toggleToast(undefined);
            expect(toastContainer.style.display).toBe('none');
            
            toggleToast(null);
            expect(toastContainer.style.display).toBe('none');
        });
        
    
    });

    

});

describe('Integration Tests', () => {


let form;
let addButton;
let taskList;
let countText;
let inputBox;


beforeEach(() => {

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const cssContent = fs.readFileSync(path.resolve(__dirname, './css/style.css'), 'utf8');

document.body.innerHTML = html;

const styleElement = document.createElement('style');
styleElement.textContent = cssContent;
document.head.appendChild(styleElement);

require('./script.js');

inputBox = document.querySelector('#input');
form = document.querySelector('form');
addButton = document.querySelector('#add');
taskList = document.querySelector('#listtask');
countText = document.querySelector('.count h3');

const mockLocalStorage = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => (store[key] = value.toString()),
        clear: () => (store = {}),
        removeItem: (key) => delete store[key],
    };
})();
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

jest.resetModules();
localStorage.clear();

    

    
});

afterEach(() => {
    localStorage.clear();
});

describe('DOM content load', () => {

    it('should render tasks based on saved filter when DOMContentLoaded is fired', () => {
        const savedFilter = 'completed';
        localStorage.setItem('statusFilter', savedFilter);
        localStorage.setItem('taskIdCounter', '0');
        
        document.dispatchEvent(new Event('DOMContentLoaded'));

        expect(localStorage.getItem('statusFilter')).toBe(savedFilter);
        expect(document.querySelector('input[value="completed"]').checked).toBe(true);
        
    });

    it('should increment taskIdCounter when a task is added', () => {
        
    
        inputBox.value = 'Test Task 1';
        addButton.click();
    
        expect(localStorage.getItem('taskIdCounter')).toBe('1');
    
        inputBox.value = 'Test Task 2';
        addButton.click();
    
        expect(localStorage.getItem('taskIdCounter')).toBe('2');
      });

    it('should set default filter to "all" if no saved filter is found when DOMContentLoaded is fired', () => {
        localStorage.setItem('taskIdCounter', '0');

        document.dispatchEvent(new Event('DOMContentLoaded'));

        expect(localStorage.getItem('statusFilter')).toBeNull();
        expect(document.querySelector('input[value="all"]').checked).toBe(true);
        
    });



    it('should initialize taskIdCounter from localStorage value', () => {
        localStorage.setItem('taskIdCounter', '10');
        
        expect(localStorage.getItem('taskIdCounter')).toBe('10');
    });
})

describe('Adding a Task', () => {

    it('should add a task and display in UI', () => {

        expect(document.activeElement).not.toBe(inputBox);

        expect(inputBox.value).toBe('');
        expect(taskList.textContent).toBe('');

        inputBox.value = 'New Task';
        form.dispatchEvent(new Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const filter = localStorage.getItem('statusFilter');
        const taskIdCounter =localStorage.getItem('taskIdCounter');

        expect(tasks).toHaveLength(1);
        expect(filter).toBe('all');
        expect(taskIdCounter).toBe('1');

        expect(tasks[0].id).toBe(1);
        expect(tasks[0].text).toBe('New Task');
        expect(tasks[0].completed).toBe(false);

        taskId = tasks[0].id;
        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('New Task');
        expect(aTask.getAttribute('readonly')).toBe('true');

        expect(countText.textContent).toBe('You have a total of 1 task!');
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task added successfully');

        expect(document.activeElement).toBe(inputBox);
        expect(inputBox.value).toBe('');

    });

    

    it('should add two new tasks and display in UI ', () => {

        expect(document.activeElement).not.toBe(inputBox);

        expect(inputBox.value).toBe('');
        expect(taskList.textContent).toBe('');
        
    
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        inputBox.value = 'Task 2';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const filter = localStorage.getItem('statusFilter');
        const taskIdCounter =localStorage.getItem('taskIdCounter');

        expect(tasks).toHaveLength(2);
        expect(filter).toBe('all');
        expect(taskIdCounter).toBe('2');

        expect(tasks[0].id).toBe(1);
        expect(tasks[0].text).toBe('Task 1');
        expect(tasks[0].completed).toBe(false);

        expect(tasks[1].id).toBe(2);
        expect(tasks[1].text).toBe('Task 2');
        expect(tasks[1].completed).toBe(false);

        taskId1 = tasks[0].id;
        taskId2 = tasks[1].id;

        const aTask1 = document.querySelector(`#onetask-${taskId1}`);
        const aTask2= document.querySelector(`#onetask-${taskId2}`);
        

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(2);

        expect(aTask1.value).toBe('Task 1');
        expect(aTask1.getAttribute('readonly')).toBe('true');

        expect(aTask2.value).toBe('Task 2');
        expect(aTask2.getAttribute('readonly')).toBe('true');

        expect(countText.textContent).toBe('You have a total of 2 tasks!');
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task added successfully');

        expect(document.activeElement).toBe(inputBox);
        expect(inputBox.value).toBe('');
    
       

    });

    it('should add a new task with leading spaces after trimming', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = '    Task';
        form.dispatchEvent(new  Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toHaveLength(1);
        expect(tasks[0].text).toBe('Task');
    });

    it('should add a new task with trailing spaces after trimming', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = 'Task     ';
        form.dispatchEvent(new  Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toHaveLength(1);
        expect(tasks[0].text).toBe('Task');
    });

    it('should add a new task with leading and trailing spaces after trimming', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = '    Task     ';
        form.dispatchEvent(new  Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toHaveLength(1);
        expect(tasks[0].text).toBe('Task');
    });

    it('should not add an empty task', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = '';
        form.dispatchEvent(new  Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toBeNull();
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task cannot be empty!!');

    });

    it('should not add an empty task', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = '';
        form.dispatchEvent(new Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toBeNull();
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task cannot be empty!!');

        inputBox.dispatchEvent(new Event('input'));
        const style = window.getComputedStyle(inputBox);
        expect(style.borderBottom).toBe('');

    });

    it('should not add a task with only spaces', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
    
        inputBox.value = '     ';
        form.dispatchEvent(new Event('submit'));
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toBeNull();
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task cannot contain only spaces!');
    });

    it('should not add an existing task', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toHaveLength(1);
        
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task already exists!');

        const displayedTasks = document.querySelectorAll('.eachtask input[type="text"]');
        expect(displayedTasks).toHaveLength(1);
        expect(displayedTasks[0].value).toBe('Task 1');
    });
});


describe('filter a Task', () => {


    it('should filter tasks based on status', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new  Event('submit'));
        
        inputBox.value = 'Task 2';
        form.dispatchEvent(new  Event('submit'));

        inputBox.value = 'Task 3';
        form.dispatchEvent(new  Event('submit'));
        
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[1].completed = true;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    
        const inProgressFilter = document.querySelector('input[name="taskFilter"][value="inprogress"]');
        inProgressFilter.click();
    
        const displayedInProgressTasks = document.querySelectorAll('.eachtask input[type="text"]');
        expect(displayedInProgressTasks).toHaveLength(2);
        expect(displayedInProgressTasks[0].value).toBe('Task 1');
        expect(displayedInProgressTasks[1].value).toBe('Task 3');

        const completedFilter = document.querySelector('input[name="taskFilter"][value="completed"]');
        completedFilter.click();
    
        const displayedCompletedTasks = document.querySelectorAll('.eachtask input[type="text"]');
        expect(displayedCompletedTasks).toHaveLength(1);
        expect(displayedCompletedTasks[0].value).toBe('Task 2');
    });

});

describe('Deleting a Task', () => {

    it('should delete a task after adding a task', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be deleted';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const deleteButton = document.querySelector(`#edit-${taskId} button[title="Delete Task"]`);
        deleteButton.click();
    
    
        const confirmButton = document.getElementById('confirm-button');
        confirmButton.click();
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks).toHaveLength(0);
    });

    it('should cancel deletion of task', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be deleted';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const deleteButton = document.querySelector(`#edit-${taskId} button[title="Delete Task"]`);
        deleteButton.click();
    
        
        const cancelButton = document.getElementById('cancel-button');
        cancelButton.click();
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks).toHaveLength(1);
        expect(updatedTasks[0].text).toBe('Task to be deleted');
    });







});

describe('Editing a Task', () => {


    it('should edit a task', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task to be edited');
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editBox =  document.querySelector(`#onetask-${taskId}`);
        editBox.value = 'Task edited';

        fireEvent.input(editBox);

        const saveButton = document.querySelector(`#save-${taskId} button[title="Save Task"]`);
        saveButton.click();
    
        const confirmButton = document.getElementById('confirm-button');
        confirmButton.click();
        
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Task edited');

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task edited');

        
    });


    it('should not do anything when other keys are pressed', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editBox =  document.querySelector(`#onetask-${taskId}`);
        editBox.value = 'Task edited';


        fireEvent.keyDown(editBox, { key: 'Space' });

        
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Task to be edited')

        
    });

    it('should cancel edit a task after editing', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editbox =  document.querySelector(`#onetask-${taskId}`);
        editbox.value = 'Task edited';

        const saveButton = document.querySelector(`#save-${taskId} button[title="Save Task"]`);
        saveButton.click();


        const cancelButton = document.getElementById('cancel-button');
        cancelButton.click();
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Task to be edited');

        const aTask = document.querySelector(`#onetask-1`);

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task to be edited');

        
    });

    it('should not edit a task that is empty', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editbox =  document.querySelector(`#onetask-${taskId}`);
        editbox.value = '';

        const saveButton = document.querySelector(`#save-${taskId} button[title="Save Task"]`);
        saveButton.click();
    
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task cannot be empty!!');
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Task to be edited');

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('');

        
    });

    it('should not edit a task to a task that already exists', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Existing Task';
        addButton.click();

        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[1].id;
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editbox =  document.querySelector(`#onetask-${taskId}`);
        editbox.value = 'Existing Task';

        const saveButton = document.querySelector(`#save-${taskId} button[title="Save Task"]`);
        saveButton.click();
    
        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Task already exists!');
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Existing Task');

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(2);
        expect(aTask.value).toBe('Existing Task');

        
    });

    it('should not be able to edit completed task', () => {

        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));
        
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;

        const checkButton = document.querySelector(`#checkbox-${taskId}`);
        checkButton.click();

        
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const notification = document.querySelector('.notification');
        expect(notification.textContent).toBe('Cannot edit completed task!');

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task 1');


         
    });



});

describe('Cancel editing of Task', () => {

    it('should cancel edit a task', () => {
        const inputBox = document.querySelector('#input');
        const addButton = document.querySelector('#add');
    
        inputBox.value = 'Task to be edited';
        addButton.click();
    
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;
    
        const editButton = document.querySelector(`#edit-${taskId} button[title="Edit Task"]`);
        editButton.click();

        const editbox =  document.querySelector(`#onetask-${taskId}`);
        editbox.value = 'Task edited';

        const cancelButton = document.querySelector(`#save-${taskId} button[title="Cancel Edit"]`);
        cancelButton.click();
    
        const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
        expect(updatedTasks[0].text).toBe('Task to be edited');

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task to be edited');
    
    });


});

describe('Change completed status', () => {


    it('should change completed status when clicked', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks[0].completed).toBeFalsy();
        
        const taskId = tasks[0].id;

        const checkButton = document.querySelector(`#checkbox-${taskId}`);
        checkButton.click()

        const tasksComplete = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksComplete[0].completed).toBeTruthy();  
    });

    it('should change completed status when clicked', () => {
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;

        const checkButton = document.querySelector(`#checkbox-${taskId}`);
        checkButton.click()
        checkButton.click()

        const tasksComplete = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksComplete[0].completed).toBeFalsy();  
    });

});

describe('Clear tasks', () => {

    it('should clear all tasks', () => {

        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));
        

        const clearButton = document.querySelector(`#clear`);
        clearButton.click()

        const confirmButton = document.getElementById('confirm-button');
        confirmButton.click();

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks).toBeNull();
        expect(taskList.textContent).toBe('');
        

    });

    it('should not clear all tasks when canceled', () => {

        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));
        

        const clearButton = document.querySelector(`#clear`);
        clearButton.click()

        const cancelButton = document.getElementById('cancel-button');
        cancelButton.click();

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        expect(tasks[0].text).toBe('Task 1');

        const aTask = document.querySelector(`#onetask-1`)

        expect(taskList.textContent).not.toBeNull();
        expect(taskList.children).toHaveLength(1);
        expect(aTask.value).toBe('Task 1');



    });

    it('should clear In Progress tasks', () => {

        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');

        
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        inputBox.value = 'Task 2';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;

        const checkButton = document.querySelector(`#checkbox-${taskId}`);
        checkButton.click()
        
        const inProgressFilter = document.querySelector('input[name="taskFilter"][value="inprogress"]');
        inProgressFilter.click();

        const clearButton = document.querySelector(`#clear`);
        clearButton.click()

        const confirmButton = document.getElementById('confirm-button');
        confirmButton.click();

        const tasksclear = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksclear).toHaveLength(1);
        expect(tasksclear[0].text).toBe('Task 1')

        
        
        

    });

    it('should clear Completed tasks', () => {
        
        
        
        const inputBox = document.querySelector('#input');
        const form = document.querySelector('form');
       
        inputBox.value = 'Task 1';
        form.dispatchEvent(new Event('submit'));

        inputBox.value = 'Task 2';
        form.dispatchEvent(new Event('submit'));

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskId = tasks[0].id;

        const checkButton = document.querySelector(`#checkbox-${taskId}`);
        checkButton.click()

        const completedFilter = document.querySelector('input[name="taskFilter"][value="completed"]');
        completedFilter.click();

        const clearButton = document.querySelector(`#clear`);
        clearButton.click()

        const confirmButton = document.getElementById('confirm-button');
        confirmButton.click();

        const tasksclear = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksclear).toHaveLength(1);
        expect(tasksclear[0].text).toBe('Task 2')
        
        

    });

});

});


