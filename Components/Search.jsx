import * as React from 'react';
import { Searchbar, Menu } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import { SelectCountry } from 'react-native-element-dropdown';
import styles from '../styles/style'


const SelectMovieType = _props => {
    const [movieType, setMovieType] = useState('1');
    const [searchQuery, setSearchQuery] = React.useState('');
    const moviesTypes = [
        {
            value: '1',
            lable: 'Popular',
        },
        {
            value: '2',
            lable: 'Playing Now',
        },
        {
            value: '3',
            lable: 'Top rated',
        },
        {
            value: '4',
            lable: 'Up Coming',
        },
    ];

    return (
        <View style={{ flexDirection: 'row', width: '100%', marginTop:3 }}>
            <Searchbar
                style={{ flex: 3 }}
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />

            <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                maxHeight={200}
                value={movieType}
                data={moviesTypes}
                valueField="value"
                labelField="lable"
                placeholder="Filter"
                onChange={e => {
                    setMovieType(e.value);
                }}
            />
        </View>

    );
};

export default SelectMovieType;


















// import * as React from 'react';
// import { Searchbar, Menu } from 'react-native-paper';
// import { Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Octicons';

// const SearchComponent = () => {
//     const [searchQuery, setSearchQuery] = React.useState('');
//     const [menuVisible, setMenuVisible] = React.useState(false);

//     const openMenu = () => setMenuVisible(true);
//     const closeMenu = () => setMenuVisible(false);

//     const movieTypes = ['Popular', 'Playing Now', 'Top Rated', 'Up Coming'];

//     return (
//         <View style={{ flexDirection: 'row', width: '100%' }}>
//             <Searchbar
//                 style={{ flex: 3 }}
//                 placeholder="Search"
//                 onChangeText={setSearchQuery}
//                 value={searchQuery}
//             />

//             <Menu
//                     visible={menuVisible}
//                     onDismiss={closeMenu}
//                     anchor={
//                         <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={openMenu}>
//                             <Icon name="filter" size={30} color="#900" />
//                         </TouchableOpacity>
//                     }
//                 >
//                     {movieTypes.map((type) => (
//                         <Menu.Item
//                             key={type}
//                             onPress={() => {
//                                 console.log(type);
//                                 closeMenu();
//                             }}
//                             title={type}
//                         />
//                     ))}
//                 </Menu>
//         </View>
//     );
// };

// export default SearchComponent;
