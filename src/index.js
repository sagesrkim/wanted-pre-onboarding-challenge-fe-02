/**
 * todo와 관련된 정보가 들어있는 객체.
 * @class
 * @param {number} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} isDone - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그들
 */
 class Todo{}

 /**
  * CREATE
   * 할 일을 추가한다.
   * 내용 없이 추가할 수 있다.
   * @param {string} content - 내용
   */
 function createTodo() {}
 
 /**
  * READ
   * 모든 할 일을 조회할 수 있다.
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id - 아이디
   */
 function getTodo(id) {}
 
 
 /**
  * UPDATE 
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id - 아이디
   * @param {number} [tagId] - 태그 아이디
   */
 function updateTodo(id, tagId) {}
 
 
 /**
  * DELETE
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id - 아이디
   * @param {number} [tagId] - 태그 아이디
   */
function deleteTodo() {}

/**
  * DELETE
   * 모든 할 일을 제거할 수 있다.
   */
function deleteAllTodo() {} 

/**
  * DELETE
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {number} id - 아이디
   */
function deleteAllTags(id) {}