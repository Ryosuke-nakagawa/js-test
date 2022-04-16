import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得&初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了にリストを追加する関数作成
const createIncompleteList = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //完了button作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //completeするターゲットを未完了から削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了に追加するdivタグ作成
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //divタグを完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    backButton.addEventListener("click", () => {
      //完了したTODOから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //未完了のTODOに追加
      //未完了に追加するdivタグ作成
      const addTarget = backButton.parentNode;
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });
  });
  //削除button作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親divを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //buttonをdivタグに追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了のliに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
