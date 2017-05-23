app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
      .then((fbItems) => {
          var itemCollection = fbItems.data;
          if(itemCollection !== null) {
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id=key;
              itemz.push(itemCollection[key]);
            });
          }
          resolve(itemz);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  let getSingleItem = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        console.log("getSingleItem error", error);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newItem))
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let deletz = (itemId) => {
    return $q ((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${itemId}.json`)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let editItem = (item) => {
    console.log("item in ItemFactory", item);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${itemId}.json`, 
        JSON.stringify({
          firstName: item.firstName,
          lastName: item.lastName,
          streetAddress: item.streetAddress,
          city: item.city,
          state: item.state,
          zipCode: item.zipCode,
          phone: item.phone,
          email: item.email
        })  
      ).then((resultz) => {
        resolve(resultz);
        console.log("editItem resultz", resultz);
      }).catch((error) => {
        console.log("editItem error", error);
      });
    });
  };


  return {getItemList:getItemList, getSingleItem:getSingleItem, postNewItem:postNewItem, deletz:deletz, editItem:editItem};

});
