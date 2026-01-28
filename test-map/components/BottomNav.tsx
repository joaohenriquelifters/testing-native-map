import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function BottomNav() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="home-outline" size={26} color="#3B2A1E" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="location-outline" size={26} color="#3B2A1E" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <View style={styles.addCircle}>
                    <Ionicons name="add" size={30} color="#ffffffff" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="search-outline" size={26} color="#3B2A1E" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="menu-outline" size={26} color="#3B2A1E" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#F3E6D2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 5, // Handle non-safe area devices slightly better
    },
    navItem: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#3B2A1E',
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow for elevation
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
